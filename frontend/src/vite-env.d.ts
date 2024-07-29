/// <reference types="vite/client" />

// ---------------- Pages ------------------

type SignInReqType = {
  email: string;
  password: string;
};

type SignUpReqType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// -------------- Components ------------------

// Inputfield Component

type InputProps = {
  type: string;
  id: string;
  extraClass?: string;
  value: string;
  placeholder: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

// Button Component

type BtnVariantType = 'primary' | 'danger';

type ButtonType = {
  text: string;
  variant: BtnVariantType;
  extraClass?: string;
  clickHandler?: () => void;
};

// AuthForm Component

type AuthFormType<T> = {
  heading: string;
  subHeading: ReactNode;
  fieldData: userAuthFieldType[];
  inputData: T;
  submitHandler: (arg: T) => void;
};

// Herosection Component
type HeroSectionType = {
  data: MediaType[];
};

// MediaList Component

type MediaListType = {
  data: MediaType[];
};

// MediaItem Component

type MediaItemType = {
  item: MediaType;
  extraClass: string;
};

// ---------------- Api ------------------

// Media

type UndefinedType = undefined;

type TagStrings = 'user_bookmark' | 'main_bookmark';

type BookmarkTagType = {
  type: TagStrings;
  id: number;
};

type BookmarkResType = {
  msg: string;
  data?: MediaType[];
};

type BookmarkReqType = MediaType;

type MediaResType = {
  msg: string;
  data?: MediaType[];
};

// Media Slice

type mediaSliceStateType = {
  currMedia: MediaType | {};
  filterStr: string;
};

// User

type GeneralAuthType = {
  msg: string;
  user: UserType;
};

// ---------------- General ------------------

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
};

type MediaType = {
  id: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  title: string;
};

type userAuthFieldType = {
  label: string;
  id: string;
  type: string;
  key: string;
  placeholder: string;
};

type FilteredDataType = {
  data: MediaType[];
  str: string;
};