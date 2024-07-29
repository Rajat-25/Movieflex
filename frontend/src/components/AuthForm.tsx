import { ChangeEvent, useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const AuthForm = <T,>({
  heading,
  subHeading,
  fieldData,
  inputData,
  submitHandler,
}: AuthFormType<T>) => {
  const [userData, setUserData] = useState<T>(inputData);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const clickHandler = () => {
    submitHandler(userData);
    setUserData(inputData);
  };

  const content = fieldData.map(({ label, id, placeholder, key, type }) => {
    const value = userData[id as keyof T] as string;

    return (
      <div key={key} className='flex flex-col gap-2 '>
        <label className='text-md md:text-lg' htmlFor={id}>
          {label}
        </label>
        <InputField
          placeholder={placeholder ? placeholder : ''}
          type={type}
          id={id}
          changeHandler={onChangeHandler}
          extraClass='text-black placeholder-slate-600'
          value={value}
        />
      </div>
    );
  });

  return (
    <div className='flex  justify-center items-center'>
      <div className='flex mt-12 flex-col flex-grow max-w-[21rem] min-h-[16rem] border rounded-lg gap-4 p-8 shadow-md  shadow-white '>
        <h1 className='flex text-lg md:text-2xl justify-center'>{heading}</h1>
        {content}
        <Button clickHandler={clickHandler} text='Submit' variant='primary' />
        <p className='text-md'>{subHeading}</p>
      </div>
    </div>
  );
};

export default AuthForm;
