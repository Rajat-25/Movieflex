import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut, mainState } from '../store';
import { urlPath } from '../utils';
import Button from './Button';
import Searchbar from './Searchbar';
import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isUserLoggedIn } = useSelector(
    (state: mainState) => state.user_slice
  );

  const navItems = [
    {
      text: 'Explore',
      key: 'home_nv',
      to: urlPath.explore,
      include: isUserLoggedIn,
    },

    {
      text: 'Dashboard',
      key: 'dashboard_nv',
      to: urlPath.dashboard,
      include: isUserLoggedIn,
    },
    {
      text: 'Wishlist',
      key: 'wishlist_nv',
      to: urlPath.wishlist,
      include: isUserLoggedIn,
    },
    {
      text: 'Sign In',
      key: 'signin_nv',
      to: urlPath.signin,
      include: !isUserLoggedIn,
    },
    {
      text: 'Sign Up',
      key: 'signup_nv',
      to: urlPath.signup,
      include: !isUserLoggedIn,
    },
  ];

  const navLinks = navItems.map(({ text, key, to, include }) => {
    if (include) {
      return (
        <Link
          className={` ${isOpen ? 'block my-2' : ''} hover:scale-105`}
          key={key}
          to={to}
        >
          {text}
        </Link>
      );
    }
  });

  const logOutHandler = () => {
    navigate(urlPath.signin);
    dispatch(logOut());
  };

  let content;

  if (isUserLoggedIn) {
    content = (
      <>
        {!isOpen && <Searchbar />}
        {navLinks}
        <Button text='Log Out' clickHandler={logOutHandler} variant='danger' />
      </>
    );
  } else {
    content = navLinks;
  }

  return (
    <nav className='px-1 py-3'>
      <div className='text-xl flex items-center justify-between'>
        <h1 className='font-bold  text-netRed'>MOVIEFLEX</h1>

        <div className='flex justify-end w-full'>
          {!isOpen && (
            <Bars3BottomRightIcon
              onClick={() => setIsOpen(true)}
              className='md:hidden cursor-pointer w-[1.5rem] h-[1.5rem]'
            />
          )}
          <div
            className={` ${
              isOpen ? 'block' : 'hidden'
            } md:flex font-semibold text-sm sm:text-lg lg:text:xl  md:items-center md:justify-end md:gap-8`}
          >
            <XMarkIcon
              onClick={() => setIsOpen(false)}
              className=' text-red-600  md:hidden w-[1.5rem] h-[1.5rem]'
            />
            {content}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
