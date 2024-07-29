import { HeartIcon } from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  addCurrMedia,
  useAddbookmarkMutation,
  useRemovebookmarkMutation,
} from '../store';
import { urlPath } from '../utils';

const MediaItem: React.FC<MediaItemType> = ({ item, extraClass }) => {
  const url = import.meta.env.VITE_MEDIA_IMG_URL + item.backdrop_path;

  const dispatch = useDispatch();

  const [addBookmark] = useAddbookmarkMutation();

  const [removeBookmark] = useRemovebookmarkMutation();

  const navigate = useNavigate();

  const viewMedia = () => {
    dispatch(addCurrMedia(item));
    navigate(urlPath.watch + `/${item.title}`);
  };

  const addToFavourites = (
    e: MouseEvent<SVGSVGElement, globalThis.MouseEvent>
  ) => {
    const ele = e.currentTarget as SVGSVGElement;

    if (ele.classList.contains('fill-netRed')) {
      removeBookmark(item);
    } else {
      addBookmark(item);
    }

    ele.classList.toggle('fill-netRed');
    ele.classList.toggle('text-netRed');
    e.stopPropagation();
  };

  return (
    <div
      onClick={viewMedia}
      className='relative h-[9rem] w-[8rem] sm:h-[12rem] sm:w-[14rem] lg:h-[17.5rem] lg:w-[16.5rem] hover:scale-105 '
    >
      <HeartIcon
        onClick={addToFavourites}
        className={`absolute z-10 top-3 right-3  size-5 md:size-9 ${extraClass}`}
      />

      <img
        src={url}
        className='absolute w-full h-full aspect-video object-cover '
        alt=''
      />
      <div className=' absolute z-10 bottom-2 flex justify-center w-full '>
        <h2 className='text-sm md:text-lg text-white'>
          {item?.title?.slice(0, 25)}
        </h2>
      </div>
    </div>
  );
};

export default MediaItem;
