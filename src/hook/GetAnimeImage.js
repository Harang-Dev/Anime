import axios from 'axios';

const fetchAnimeImage = async() => {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    const imageUrls = response.data.data
    .filter(url => url !== undefined)
    .filter(anime => anime.trailer !== null)
    .map(anime => anime.trailer.images.maximum_image_url);
    console.log(imageUrls);
    return imageUrls;
}

export default fetchAnimeImage;