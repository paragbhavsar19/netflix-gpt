import { createSlice } from "@reduxjs/toolkit";


const congfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = congfigSlice.actions;
export default congfigSlice.reducer;
