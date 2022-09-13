import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mode: {
      editUser: false,
      addUser: false,
    },
    user: {
      id: null,
      age: null,
      name: "",
    },
  },
  reducers: {
    edit(state, action) {
      state.mode.editUser = action.payload;
    },
    add(state, action) {
      state.mode.addUser = action.payload;
    },
    userData(state, action) {
      state.user = {
        id: action.payload.id,
        age: action.payload.age,
        name: action.payload.name,
      };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
