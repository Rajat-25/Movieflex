import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mediaApi from '../apis/mediaApi';
import userApi from '../apis/userApi';
import mediaSlice from '../slices/mediaSlice';
import userSlice from '../slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [mediaApi.reducerPath]: mediaApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [mediaSlice.name]: mediaSlice.reducer,
});

const mainReducer = persistReducer(persistConfig, rootReducer);

export default mainReducer;
