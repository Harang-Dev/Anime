import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Slide from './Slide';
import GetAnimeData from '../hook/GetAnimeData';

const ContentBox = () => {
  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);
  const [japaneseTitles, setJapaneseTitles] = useState([])
  const [synopsises, setSynopsises] = useState([]);
  const [scores, setScores] = useState([]);
  const [scoredby, setScoredby] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { imageUrls, titles, synopsis, scores, favorites, scoredBy, japanTitles } = await GetAnimeData();
      setImages(imageUrls);
      setTitles(titles);
      setSynopsises(synopsis);
      setScores(scores);
      setFavorites(favorites);
      setScoredby(scoredBy)
      setJapaneseTitles(japanTitles);

    };
    fetchData();
  }, []);

  return (
    <Carousel autoplay autoplaySpeed={2000} style={{ width: '100vw', height: '80vh', }}>
      {images.map((image, index) => (
          <Slide
            key={index}
            image={image}
            title={titles[index]}
            jptitle = {japaneseTitles[index]}
            synopsis={synopsises[index]}
            score={scores[index]}
            scoredBys={scoredby[index]}
            favorites={favorites[index]}
          />
      ))}
    </Carousel>
  );
};

export default ContentBox;
