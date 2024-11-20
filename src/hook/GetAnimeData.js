import axios from "axios"

const fetchAnimeData = async() => {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    const imageUrls = response.data.data
    .filter(url => url !== undefined)
    .filter(anime => anime.trailer !== null)
    .map(anime => anime.trailer.images.maximum_image_url);
    const titles = response.data.data.map(anime => anime.title);
    const japanTitles = response.data.data.map(anime => anime.title_japanese);
    const synopsis = response.data.data.map(anime => anime.synopsis);
    const scores = response.data.data.map(anime => anime.score);

    const formatNumberWithComma = (num) => {
        return new Intl.NumberFormat().format(num);
      };

      const favorites = response.data.data.map((anime) =>
        formatNumberWithComma(anime.favorites)
      );

      const scoredBy = response.data.data.map((anime) =>
        formatNumberWithComma(anime.scored_by)
      );
    console.log("총데이터", response);
    return { imageUrls, titles, synopsis, scores, favorites, scoredBy, japanTitles };
}

export default fetchAnimeData;