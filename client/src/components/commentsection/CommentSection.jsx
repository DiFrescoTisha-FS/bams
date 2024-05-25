import React, { useState, useMemo } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";
import { BsSendFill } from "react-icons/bs";
import { useAuthContext } from '../../contexts/AuthContext';
import cloudinary from '../../utils/cloudinaryConfig' // Import the Cloudinary config
import PropTypes from 'prop-types';
import {
  SectionContainer,
  SectionBg,
  SectionWrapper,
  FlexibleLayout,
  TextWrapper,
  ImgWrap,
  StyledImage,
  StyledText,
  SubmitButton,
  BtnWrap,
  FormWrap,
  TextArea,
} from "../StyledComponents.jsx";

const CommentSection = React.memo(({ currentUser }) => {
  const { dispatch, setErrorMessage, clearErrorMessage, setSuccessMessage, clearSuccessMessage } = useAuthContext();

  const desktopUrl = useMemo(() => cloudinary.url("COMMENTBG_2_mctqkg", {
    transformation: [
      { width: 1920, crop: "scale" },
      { quality: "auto:good" },
      { fetch_format: "auto" },
    ],
  }), []);

  const contentImageUrl = useMemo(() => cloudinary.url("bam_ctu4i6", {
    transformation: [
      { width: 455, height: 455, crop: "fill" },
      { quality: "auto" },
      { fetch_format: "auto" },
    ],
  }), []);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newRating) => setRating(newRating);
  const handleCommentChange = (event) => setComment(event.target.value);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!currentUser) {
      dispatch(setErrorMessage("Login required to leave a comment or rate. Please log in to continue."));
      return;
    }
    try {
      await axios.post("/api/comment-rating", { comment, rating });
      setRating(0);
      setComment("");
      dispatch(setSuccessMessage("Comment/rating submitted successfully!"));
      setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, 3000);
    } catch (error) {
      console.error("Failed to submit comment and rating", error);
      dispatch(setErrorMessage("Error submitting comment or rating. Please try again later or contact support for assistance."));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 3000);
    }
  };

  return (
    <SectionContainer id="comments">
      <SectionBg>
        <StyledImage
          src={desktopUrl}
          alt="Crescent Moon"
          position="absolute"
          width="100%"
          height="auto"
          objectFit="contain"
          top={0}
          left={0}
          loading="lazy"
        />
      </SectionBg>
      <SectionWrapper style={{ zIndex: "20" }} onSubmit={handleCommentSubmit}>
        <FlexibleLayout>
          <ImgWrap>
            <StyledImage
              src={contentImageUrl}
              alt="Artist Looking Up At Camera"
              position="relative"
              width="455px"
              height="auto"
              borderRadius="10px"
              border="2px solid #ac94f4"
              zIndex="10"
              loading="lazy"
            />
          </ImgWrap>
          <TextWrapper className="mt-10">
            <StyledText
              as="p"
              color="#fff"
              fontSize="20px"
              fontWeight="700"
              textTransform="uppercase"
              marginBottom="16px"
              letterSpacing="1.4px"
            >
              Bam Fans
            </StyledText>
            <StyledText
              as="h1"
              color="#ac94f4"
              fontSize="44px"
              fontWeight="600"
              marginBottom="24px"
              tabletFontSize="40px"
              phoneFontSize="32px"
            >
              Before you go...
            </StyledText>
            <StyledText
              fontSize="20px"
              lineHeight="26px"
              color="#fff"
              marginTop="30px"
              marginBottom="25px"
              maxWidth="440px"
              phoneFontSize="18px"
            >
              Tell Bam what you loved most about your galaxy tour and rate your
              adventure! Thanks for stopping by.
            </StyledText>
            <FormWrap onSubmit={handleCommentSubmit}>
              <Rating
                value={rating}
                onChange={handleRatingChange}
              />
              <TextArea
                placeholder="Leave your comment here"
                value={comment}
                onChange={handleCommentChange}
              />
              <BtnWrap>
                <SubmitButton type="submit">
                  Submit <BsSendFill />
                </SubmitButton>
              </BtnWrap>
            </FormWrap>
          </TextWrapper>
        </FlexibleLayout>
      </SectionWrapper>
    </SectionContainer>
  );
});

CommentSection.displayName = 'CommentSection';

CommentSection.propTypes = {
  currentUser: PropTypes.any
};

export default CommentSection;
