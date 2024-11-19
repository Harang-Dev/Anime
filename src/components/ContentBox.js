import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import GetAnimeImage from '../hook/GetAnimeImage';
import GetAnimeTitle from '../hook/GetAnimeTitle'
import Slide from './Slide';

const ContentBox = () => {
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImages = await GetAnimeImage();
      const fetchedTitles = await GetAnimeTitle();
      setImages(fetchedImages);
      setTitles(fetchedTitles);
    };

    fetchData();
  }, []);

  return (
    <Carousel autoplay style={{ width: '100vw', height: '100vh', }}>
      <Slide />
    </Carousel>
  );
};

export default ContentBox;
