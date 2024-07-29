import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCurrMedia } from '../store';
import { ReactNode } from 'react';

const WrapIcon = ({
  children,
  viewMedia,
  text,
  bgColor,
  txtColor
}: {
  children: ReactNode;
  viewMedia: () => void;
  text: string;
  txtColor:string;
  bgColor: string;
}) => {
  return (
    <span
      onClick={viewMedia}
      className={`hover:scale-110 rounded-full items-center py-1 px-2 md:py-2 md:px-4  md:gap-2 flex bg-${bgColor}`}
    >
      {children}
      <p className={`text-${txtColor} font-semibold text-sm sm:text-lg lg:text-xl`}>
        {text}
      </p>
    </span>
  );
};

const HeroSection: React.FC<HeroSectionType> = ({ data }) => {
  if (!data || !data[0]) {
    return (
      <div className='text-center text-2xl md:text-6xl'>
        Content Not Available. Search something else
      </div>
    );
  } else {
    const { poster_path, overview, title } = data && data[0];
    const dispatch = useDispatch();

    const url = import.meta.env.VITE_MEDIA_IMG_URL + poster_path;

    const text = overview.slice(0, 500);

    const navigate = useNavigate();

    const viewMedia = () => {
      navigate(`/watch/${title}`);
      dispatch(addCurrMedia(data[0]));
    };

    return (
      <div className='relative max-w-full h-[25rem] sm:min-h-[30rem] md:min-h-[34rem]  '>
        <img
          className='absolute inset-0 w-full h-full '
          src={url}
          alt='heroSection'
        />

        <div className=' flex flex-col gap-4 pb-8 absolute left-4 bottom-4 text-white'>
          <div className='flex gap-8 items-center '>
            <WrapIcon text='Play' viewMedia={viewMedia} bgColor='white' txtColor='black'>
              <PlayIcon className=' size-6 fill-black ' />
            </WrapIcon>

            <WrapIcon text='More Info' viewMedia={viewMedia} bgColor='[#afb0b3]' txtColor='white'>
              <InformationCircleIcon className=' size-6  ' />
            </WrapIcon>
          </div>
          {/*  */}
          <div className='flex flex-col gap-4 bg-black  bg-opacity-50'>
            <h2 className='text-md sm:text-2xl  md:text-3xl '>{title}</h2>
            <p className='text-sm sm:text-md md:text-[1.1rem]'>{text}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default HeroSection;
