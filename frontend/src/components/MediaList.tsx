import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useReadBookmarkQuery } from '../store';
import MediaItem from './MediaItem';

const MediaList: React.FC<MediaListType> = ({ data }) => {
  const [slide, setSlide] = useState<number>(0);

  const { data: bookmarkData, isSuccess: bookmarkSucess } =
    useReadBookmarkQuery(undefined);

  const prev = () => setSlide(slide - 1);

  const next = () => setSlide(slide + 1);

  let mediaCards = [],
    content = [];

  if (slide >= 4 || slide < 0) setSlide(0);

  if (bookmarkSucess) {
    const bookmarkIds = new Set();

    bookmarkData.data?.forEach((item) => bookmarkIds.add(item.id));

    for (let idx = 0; idx < data.length; idx++) {
      let item = data[idx];

      let extraClass = bookmarkIds.has(item.id)
        ? 'fill-netRed text-netRed'
        : '';

      mediaCards.push(
        <MediaItem item={item} key={item.id} extraClass={extraClass} />
      );

      if ((idx + 1) % 5 === 0 || idx === data.length - 1) {
        const ele = (
          <div
            key={`idx+${item.id}`}
            className='mr-2 flex gap-2 w-full'
            style={{ transform: `translateX(${-1 * slide * 100}%)` }}
          >
            {mediaCards}
          </div>
        );
        content.push(ele);
        mediaCards = [];
      }
    }
  }

  return (
    <div className='flex items-center gap-2  w-full overflow-hidden '>
      <ChevronLeftIcon onClick={prev} className='w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' />
      <div className='flex w-[95%] overflow-hidden'>{content}</div>
      <ChevronRightIcon onClick={next} className=' w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' />
    </div>
  );
};

export default MediaList;
