import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setLoggedInUser } = userSlice.actions

export const selectUser = (state) => state.user.value
export default userSlice.reducer
