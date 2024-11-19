import React from 'react';
import styled from 'styled-components';
import { StarFilled, HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import GetAnimeData from '../hook/GetAnimeData';

const BackgroundImage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
`;

const TitleBox = styled.div`
    width: auto;
    height: auto;
    font-size: 40px;
    font-weight: bold;
    color: white;
`;

const JapTitle = styled.div`
    width: auto;
    height: auto;
    font-size: 20px;
    color: white;
`;

const StoryBox = styled.div`
    width: 1000px;
    height: auto;
    font-size: 15px;
    color: white;
`;

const VoteLoveBox = styled.div`
    width: auto;
    height: auto;
    color: white;
    display: flex;
`;

const VoteText = styled.p`
    font-size: 17px;
`;


function Slide(props) {
    return (
        <BackgroundImage>
            <TitleBox>Hunter X Hunter (2011)</TitleBox>
            <JapTitle>hunter</JapTitle>
            <StoryBox>asdfasdfasdfasfasfasdfsadfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsfqwersadvasdddddaaaaaaaaaaaaaaaaasdfasdf</StoryBox>
            <VoteLoveBox>
                <StarFilled style={{ fontSize: 20, color: 'yellow'}} />
                <VoteText style={{color: 'yellow'}}>9.03</VoteText>
                <VoteText>(1,902,234 ratings)</VoteText>
                <HeartFilled style={{ fontSize: 20, color: 'hotpink'}} />
                <VoteText>233,322</VoteText>
            </VoteLoveBox>
            <Button onClick={GetAnimeData} >test</Button>
        </BackgroundImage>
    );
}

export default Slide;