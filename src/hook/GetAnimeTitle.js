import axios from "axios";

const fetchAnimeTitle = async() => {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    console.log("총 데이터", response)
    const animeInfos = response.data.data.map(anime => anime.title);
    console.log(animeInfos)
}

export default fetchAnimeTitle;