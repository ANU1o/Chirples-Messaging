import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../APIs/allAPIs";

const fetchUser = createAsyncThunk(`userList/fetchUser`, async () => {
  const result = await getAllUser();
  return result.data;
});

const userSlice = createSlice({
  name: "userList",
  initialState: {
    loading: false,
    allUser: [],
    searchArray: [],
    error: "",
  },

  reducers: {
    searchUser: (state, action) => {
      // eslint-disable-next-line
      state.allUser = state.searchArray.filter((user) => {
        user.id
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim());
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.allUser = action.payload;
      state.searchArray = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.allUser = [];
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export { fetchUser };
export const { searchUser } = userSlice.actions;
