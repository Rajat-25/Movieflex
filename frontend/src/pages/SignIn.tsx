import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { logIn, useSignInMutation } from '../store';
import { signInFields, signInInputs, urlPath } from '../utils';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signInReq] = useSignInMutation();

  const sendSignInReq = async (arg: SignInReqType) => {
    const { user } = await signInReq(arg).unwrap();
    dispatch(logIn(user));
    navigate(urlPath.explore);
  };

  const subHeading = (
    <>
      Don't have an account ? &nbsp;
      <Link className='text-red-500' to={urlPath.signup}>
        Sign Up
      </Link>
    </>
  );

  return (
    <AuthForm
      heading={'Sign In'}
      subHeading={subHeading}
      fieldData={signInFields}
      inputData={signInInputs}
      submitHandler={sendSignInReq}
    />
  );
};

export default SignIn;
