import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Root from './pages/Root';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Watch from './pages/Watch';
import Wishlist from './pages/Wishlist';
import { mainState } from './store';
import { urlPath } from './utils';

const App = () => {
  const { isUserLoggedIn } = useSelector(
    (state: mainState) => state.user_slice
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: !isUserLoggedIn ? (
            <SignIn />
          ) : (
            <Navigate to={urlPath.explore} />
          ),
        },
        {
          path: urlPath.signin,
          element: !isUserLoggedIn ? (
            <SignIn />
          ) : (
            <Navigate to={urlPath.explore} />
          ),
        },
        {
          path: urlPath.signup,
          element: !isUserLoggedIn ? (
            <SignUp />
          ) : (
            <Navigate to={urlPath.explore} />
          ),
        },
        {
          path: urlPath.explore,
          element: isUserLoggedIn ? (
            <Explore />
          ) : (
            <Navigate to={urlPath.signin} />
          ),
        },
        {
          path: urlPath.dashboard,
          element: isUserLoggedIn ? (
            <Dashboard />
          ) : (
            <Navigate to={urlPath.signin} />
          ),
        },
        {
          path: urlPath.wishlist,
          element: isUserLoggedIn ? (
            <Wishlist />
          ) : (
            <Navigate to={urlPath.signin} />
          ),
        },
        {
          path:urlPath.watch+'/:id',
          element: isUserLoggedIn ? (
            <Watch />
          ) : (
            <Navigate to={urlPath.signin} />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
