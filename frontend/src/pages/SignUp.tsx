import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { logIn, useSignUpMutation } from '../store';
import { signUpFields, signUpInputs, urlPath } from '../utils';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpReq] = useSignUpMutation();

  const sendSignUpReq = async (arg: SignUpReqType) => {
    const { user } = await signUpReq(arg).unwrap();
    dispatch(logIn(user));
    navigate(urlPath.explore);
  };

  const subHeading = (
    <>
      Already have an account ? &nbsp;
      <Link className='text-red-500 ' to={urlPath.signin}>
        Sign In
      </Link>
    </>
  );

  return (
    <AuthForm
      heading={'Sign Up'}
      subHeading={subHeading}
      inputData={signUpInputs}
      fieldData={signUpFields}
      submitHandler={sendSignUpReq}
    />
  );
};

export default SignUp;
