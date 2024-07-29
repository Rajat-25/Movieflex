const signInFields = [
  {
    label: 'Email',
    id: 'email',
    type: 'email',
    key: 'email_si',
    placeholder: 'Enter email...',
  },
  {
    label: 'Password',
    id: 'password',
    type: 'password',
    key: 'password_si',
    placeholder: 'Enter password...',
  },
];

const signUpFields = [
  {
    label: 'Firstname',
    id: 'firstName',
    type: 'text',
    key: 'firstName_su',
    placeholder: 'Enter firstname...',
  },
  {
    label: 'Lastname',
    id: 'lastName',
    type: 'text',
    key: 'lastName_su',
    placeholder: 'Enter lastname...',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'email',
    key: 'email_su',
    placeholder: 'Enter email...',
  },
  {
    label: 'Password',
    id: 'password',
    type: 'password',
    key: 'password_su',
    placeholder: 'Enter password...',
  },
];

const signInInputs = {
  email: '',
  password: '',
};

const signUpInputs = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

enum urlPath {
  explore = '/explore',
  signin = '/signin',
  signup = '/signup',
  dashboard = '/dashboard',
  wishlist = '/wishlist',
  watch = '/watch',
}

const getFilteredData = ({ data, str }: FilteredDataType) => {
  const res = data.filter((item) => {
    if (item?.title?.toLowerCase().includes(str.toLowerCase())) {
      return item;
    }
  });
  return res;
};

export {
  signInFields,
  signInInputs,
  signUpFields,
  signUpInputs,
  urlPath,
  getFilteredData,
};
