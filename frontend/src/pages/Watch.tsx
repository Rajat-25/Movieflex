import { useSelector } from 'react-redux';
import { mainState } from '../store';

const Watch = () => {
  const { currMedia } = useSelector((state: mainState) => state.media_slice);

  const { title, overview } = currMedia as MediaType;

  return (
    <div className=' w-full flex  justify-center  '>
      <div className=' w-[90%]  flex flex-col items-center gap-4'>
        <iframe
          className='w-full h-[20rem] md:h-[30rem]'
          src='https://www.youtube.com/embed/yJg-Y5byMMw'
        />
        <div className='flex  flex-col gap-4'>
          <h2 className='text-2xl'>{title}</h2>
          <p>{overview}</p>
        </div>{' '}
      </div>
    </div>
  );
};

export default Watch;
