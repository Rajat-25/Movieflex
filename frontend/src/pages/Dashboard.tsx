import { ArrowUpRightIcon, UserIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mainState, useReadBookmarkQuery } from '../store';
import { urlPath } from '../utils';

const Dashboard = () => {
  const navigate = useNavigate();
  const {
    data: bookmarkData,
    isLoading: bookmarkLoading,
    isSuccess: bookmarkSuccess,
  } = useReadBookmarkQuery(undefined);

  const goToWishList = () => {
    navigate(urlPath.wishlist);
  };

  const { currentUser } = useSelector((state: mainState) => state.user_slice);

  const style = 'text-sm sm:text-xl lg:text-2xl font-semibold';

  const { firstName, lastName, email } = currentUser as UserType;

  return (
    <div className='grid  grid-cols-12 mt-10   '>
      <div className=' flex gap-4  flex-col items-center justify-center col-span-4 '>
        <UserIcon className='w-[5rem] sm:w-[10rem] lg:w-[12rem]' />
        <h2 className={style}>
          {firstName[0].toUpperCase() + firstName.slice(1)}
        </h2>
      </div>
      <div className='border-l p-8 flex gap-8 flex-col items-start  col-span-8'>
        <div className={style}>
          First name : {firstName[0].toUpperCase() + firstName.slice(1)}
        </div>
        <div className={style}>Last name : {lastName}</div>
        <div className={style}>Email : {email}</div>
        <div
          onClick={goToWishList}
          className={` cursor-pointer pr-8 w-full flex items-center justify-between ${style}`}
        >
          <>Wishlist : {bookmarkData?.data?.length}</>
          <ArrowUpRightIcon className='hover:scale-125  w-[1rem] md:w-[1.5rem]' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
