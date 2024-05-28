const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');
const Token = require('../models/token');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.REDIRECT_URL}`,
},
async function (accessToken, refreshToken, profile, done) {
  try {
    console.log("Google profile:", profile);
    const user = await User.findOneAndUpdate(
      { googleId: profile.id },
      {
        $set: {
          name: profile.displayName,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
        },
      },
      { new: true, upsert: true, runValidators: true }
    );

    console.log("User found or created:", user);

    const token = new Token({
      userId: user._id,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiration: new Date(Date.now() + 3600000),
    });

    await token.save();
    console.log("Token saved successfully");
    done(null, user);
  } catch (err) {
    console.error("Error in Google Strategy:", err);
    done(err);
  }
}
));

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user);
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    console.log("Deserializing user ID:", id);
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.error("Error deserializing user:", err);
    done(err, null);
  }
});

module.exports = passport;
