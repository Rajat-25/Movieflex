import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import mediaApi from './apis/mediaApi';
import userApi from './apis/userApi';
import mainReducer from './persistState';

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(mediaApi.middleware);
  },
});

export type mainState = ReturnType<typeof store.getState>;

export * from './apis/mediaApi';
export * from './apis/userApi';
export * from './slices/mediaSlice';
export * from './slices/userSlice';

export default store;
