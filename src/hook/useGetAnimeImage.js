import { useInfiniteQuery } from '@tanstack/react-query';
import fetchAnimeImage from '../hook/fetchAnimeImage';

const useGetAnimeImages = () => {
    return useInfiniteQuery({
        queryKey: ['anime-images'],
        queryFn: ({ pageParam = 1 }) => fetchAnimeImage(pageParam),
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });
}

export default useGetAnimeImages;