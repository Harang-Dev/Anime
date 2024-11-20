import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GetAnimeIamges from '../hook/GetAnimeImage';

const TopAnimeBox = styled.div`
    width: 73vw;
    height: 89vh;
`;

const HeaderBox = styled.div`
    width: 73vw;
    height: 45vh;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.9) 80%), url('/media/top-anime.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    border-radius: 20px;
`;

const HeaderTextBox = styled.div`
    width: auto;
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 260px); /* 한 줄에 5개의 카드 */
    grid-gap: 20px;
    margin-top: 20px;
    justify-content: center;
`;

const Card = styled.div`
    width: 260px;
    height: 320px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.7) 80%), ${({ imageUrl }) => `url(${imageUrl})`};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: white;
    font-size: 18px;
    font-weight: normal;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease; /* 애니메이션 효과 추가 */
    
    &:hover {
        transform: scale(1.05); /* hover 시 카드 확대 */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 그림자 효과 강조 */
        background-color: rgba(0, 0, 0, 0.4); /* hover 시 배경 어두워짐 */
        cursor: pointer;
    }
`;

function TopContentBox() {
    const [images, setImages] = useState([]);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { imageUrls, Titles } = await GetAnimeIamges();
            setImages(imageUrls);
            setTitles(Titles);
        };
        fetchData();
    }, []);

    return (
        <TopAnimeBox>
            <HeaderBox>
                <HeaderTextBox>
                    <h1 style={{ fontSize: 40 }}>최고의 애니메이션</h1>
                    <span style={{ fontSize: 20 }}>역대 최고 순위 애니메이션</span>
                </HeaderTextBox>
                <CardGrid>
                    {images.map((image, index) => (
                        <Card key={index} imageUrl={image}>
                            <p style={{margin: '0 0 10px 10px'}}>{titles[index]}</p>
                        </Card>
                    ))}
                </CardGrid>
            </HeaderBox>
        </TopAnimeBox>
    );
}

export default TopContentBox;
