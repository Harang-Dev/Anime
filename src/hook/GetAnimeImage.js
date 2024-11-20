import axios from 'axios';

const fetchAnimeImage = async() => {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    const imageUrls = response.data.data
    .map(anime => anime.images.jpg.image_url);
    const Titles = response.data.data.map(anime => anime.title)

    return {imageUrls,Titles};
}

export default fetchAnimeImage;