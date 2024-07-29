import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Root = () => {
  return (
    <div className='flex flex-col px-4  gap-1   '>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
