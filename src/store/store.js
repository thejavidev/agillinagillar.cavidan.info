import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './api/apiSlice';
export default configureStore({
  reducer: {
    users: usersReducer,
  },
})