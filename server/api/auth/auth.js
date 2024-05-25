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
    console.log("Google profile:", profile); // Debugging log
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

    console.log("User found or created:", user); // Debugging log

    const token = new Token({
      userId: user._id,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiration: new Date(Date.now() + 3600000),
    });

    await token.save();
    console.log("Token saved successfully"); // Debugging log
    done(null, user);
  } catch (err) {
    console.error("Error in Google Strategy:", err); // Debugging log
    done(err);
  }
}
));

passport.serializeUser((user, done) => {
  console.log("Serializing user:", user); // Debugging log
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    console.log("Deserializing user ID:", id); // Debugging log
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.error("Error deserializing user:", err); // Debugging log
    done(err, null);
  }
});

module.exports = passport;
