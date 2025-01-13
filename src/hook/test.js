import axios from 'axios';

const TestCode = async ({ pageParam = 1 }) => {
    const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=2`);
    const animeImages = response.data.data.map(anime => ({
        imageUrl: anime.images.jpg.image_url,
        title: anime.title,
    }));
    const total_pages = response.data.pagination.total_pages;
    const current_page = pageParam;
    console.log("토탈 페이지", total_pages, current_page);
    console.log("응답값", response);

    return {
        animeImages,
        total_pages,
        page: current_page,
    };
}

export default TestCode;