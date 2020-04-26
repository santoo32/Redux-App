import { createStore } from "redux";
import reducer from "./combinedReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import logger from "./middleware/logger";
import errorCatcher from "./middleware/errorCatcher";
import api from "./middleware/api";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

//Store creation with redux-toolkit
const store = configureStore({
  reducer: reducer,
  middleware: [
    ...getDefaultMiddleware(),
    //logger("Parametro"),
    //errorCatcher,
    api,
  ],
});

export default store;
