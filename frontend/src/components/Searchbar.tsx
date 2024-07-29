import { ChangeEvent, useEffect, useState } from 'react';
import InputField from './InputField';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { changeFilterStr } from '../store';

const Searchbar = () => {
  const [filterStr, setFilterStr] = useState<string>('');
  const dispatch = useDispatch();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterStr(e.target.value);
  };

  const func = () => dispatch(changeFilterStr(filterStr));

  useEffect(() => {
    const id = setTimeout(func, 700);
    return () => clearTimeout(id);
  }, [filterStr]);

  return (
    <div className='bg-white hidden lg:flex px-2 rounded-full  w-auto'>
      <InputField
        id=''
        type='text'
        value={filterStr}
        changeHandler={changeHandler}
        placeholder='Search...'
        extraClass='w-full text-black'
      />
      <MagnifyingGlassIcon className='hover:scale-105 text-gray-500 w-[1.5rem]' />
    </div>
  );
};

export default Searchbar;
