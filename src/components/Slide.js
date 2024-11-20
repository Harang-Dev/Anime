import React from "react";
import styled from "styled-components";
import { StarFilled, HeartFilled } from "@ant-design/icons";


const BackgroundImage = styled.div`
  width: 100vw;
  height: 88vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 200px;
  background-image: 
    radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.9) 50%),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const TitleBox = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  text-align: left;
`;

const JapTitle = styled.div`
  font-size: 20px;
  color: gray;
  margin-bottom: 20px;
  text-align: left;
`;

const StoryBox = styled.div`
  width: 40%;
  max-width: 1000px;
  font-size: 15px;
  color: white;
  margin-bottom: 20px;
  text-align: left;
  overflow: hidden;
  text-overflow: clip;
  white-space: normal;
`;

const VoteLoveBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  margin-bottom: 20px;
  text-align: left;
`;

const VoteText = styled.p`
  font-size: 17px;
  margin: 0;
`;

const Slide = ({ image, title, synopsis, score, favorites, scoredBys, jptitle }) => {
  return (
    <BackgroundImage image={image}>
      <TitleBox>{title}</TitleBox>
      <JapTitle>{jptitle}</JapTitle>
      <StoryBox>{synopsis}</StoryBox>
      <VoteLoveBox>
        <StarFilled style={{ fontSize: 20, color: "yellow" }} />
        <VoteText style={{ color: "yellow" }}>{score}</VoteText>
        <VoteText>({scoredBys} ratings)</VoteText>
        <HeartFilled style={{ fontSize: 20, color: "hotpink" }} />
        <VoteText>{favorites}</VoteText>
      </VoteLoveBox>
    </BackgroundImage>
  );
};

export default Slide;
