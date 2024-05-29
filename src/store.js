import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Replace with your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
