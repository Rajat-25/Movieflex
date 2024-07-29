import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: mediaSliceStateType = {
  currMedia: {},
  filterStr: ""
};

const mediaSlice = createSlice({
  name: 'media_slice',
  initialState,
  reducers: {
    addCurrMedia: (state, action: PayloadAction<MediaType>) => {
      state.currMedia = action.payload;
    },
    changeFilterStr: (state, action: PayloadAction<string>) => {
      state.filterStr = action.payload;
    },
  },
  extraReducers() {},
});

export const { addCurrMedia ,changeFilterStr} = mediaSlice.actions;

export default mediaSlice;
