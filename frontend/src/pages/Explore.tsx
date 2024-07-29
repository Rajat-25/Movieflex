import { useSelector } from 'react-redux';
import HeroSection from '../components/HeroSection';
import MediaList from '../components/MediaList';
import {
  mainState,
  usePopularMovieQuery,
  usePopularTvQuery,
  useTrendingAllQuery,
} from '../store';
import { getFilteredData } from '../utils';

const Explore = () => {
  const { filterStr } = useSelector((state: mainState) => state.media_slice);

  const {
    data: movieData,
    isLoading: movieLoading,
    isSuccess: movieSuccess,
  } = usePopularMovieQuery(undefined);

  const {
    data: tvData,
    isLoading: tvLoading,
    isSuccess: tvSuccess,
  } = usePopularTvQuery(undefined);

  const {
    data: trendingData,
    isLoading: trendingLoading,
    isSuccess: trendingSuccess,
  } = useTrendingAllQuery(undefined);

  let content;

  if (movieLoading || tvLoading || trendingLoading) {
    content = <div>Loading...</div>;
  } else if (tvSuccess && movieSuccess && trendingSuccess) {
    const getData = (data: MediaType[]) => {
      return filterStr !== ''
        ? getFilteredData({ data, str: filterStr })
        : data;
    };

    const trendingRes = getData(trendingData.data!);
    const tvRes = getData(tvData?.data!);
    const movieRes = getData(movieData?.data!);


    content = (
      <>
        <HeroSection data={trendingRes} />
        <h2 className='text-lg sm:text-2xl font-bold '>Trending</h2>
        <MediaList data={trendingRes} />
        <h2 className='text-lg sm:text-2xl font-bold'>Popular in Tv</h2>
        <MediaList data={tvRes} />
        <h2 className='text-lg sm:text-2xl font-bold '>Popular in Movies</h2>
        <MediaList data={movieRes} />
      </>
    );
  }
  return <div className='flex flex-col gap-3'>{content}</div>;
};

export default Explore;
