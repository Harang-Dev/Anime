// import axios from "axios";

// const fetchAnimeAllData = async() => {
//     const response = await axios.get('https://api.jikan.moe/v4/anime/');
//     console.log("총 데이터",response);
// }

// export default fetchAnimeAllData;

import axios from "axios";

const fetchAnimeAllData = async () => {
    let allData = [];
    let page = 1;
    let moreDataAvailable = true;

    while (moreDataAvailable) {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
            const data = response.data.data;
            
            if (data.length > 0) {
                allData = allData.concat(data);
                page++;
            } else {
                moreDataAvailable = false;
            }
        } catch (error) {
            console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
            moreDataAvailable = false;
        }
    }

    console.log("총 데이터", allData);
    return allData;
};

export default fetchAnimeAllData;
