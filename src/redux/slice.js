import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  loading: false,
  data: [],
  error: false,
};

// create slice
export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    loadData: (state) => {
      state.loading = true;
    },
    dataLoaded: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    dataLoadingError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadData, dataLoaded, dataLoadingError } = rootSlice.actions;

export default rootSlice.reducer;
