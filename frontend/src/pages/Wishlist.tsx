import { XMarkIcon } from '@heroicons/react/24/solid';
import { useReadBookmarkQuery, useRemovebookmarkMutation } from '../store';

const Wishlist = () => {
  const {
    data: bookmarkData,
    isSuccess: bookmarkSuccess,
    isLoading: bookmarkLoading,
  } = useReadBookmarkQuery(undefined);

  const [removeBookmark] = useRemovebookmarkMutation();

  let content;
  if (bookmarkLoading) {
    content = <div>Loading...</div>;
  } else if (bookmarkSuccess) {
    content = bookmarkData?.data?.map((item) => {
      const url = import.meta.env.VITE_MEDIA_IMG_URL + item.backdrop_path;

      return (
        <div
          key={item.id}
          className=' p-4 border-b flex items-center justify-between'
        >
          <div className='w-[40%] text-sm sm:text-lg lg:text-xl'>{item.title}</div>
          <div className='w-[60%] flex gap-4 justify-end items-center'>
            <img className='w-[2.5rem] md:w-[5rem]' src={url} alt='' />
            <XMarkIcon
              onClick={() => removeBookmark(item)}
              className='hover:scale-125 text-red-700 size-6'
            />
          </div>
        </div>
      );
    });
  }

  return (
    <div className='mt-4 flex justify-center'>
      <div>
        <h2 className='text-sm sm:text-xl lg:2xl text-center'>Watch Now 😊</h2>
        <div className='max-w-[30rem] sm:w-[34rem] lg:min-w-[50rem] '>{content}</div>
      </div>
    </div>
  );
};

export default Wishlist;
