import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { RootRef } from '@material-ui/core';

// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)))

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  },
});
