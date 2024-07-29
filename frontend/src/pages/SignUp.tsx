import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useSignUpMutation } from '../store';
import { signUpFields, signUpInputs, urlPath } from '../utils';

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpReq] = useSignUpMutation();

  const sendSignUpReq = async (arg: SignUpReqType) => {
    await signUpReq(arg);
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
