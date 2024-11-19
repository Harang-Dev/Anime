import axios from "axios"

const fetchAnimeData = async() => {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    console.log("총 데이터", response);
}

export default fetchAnimeData;