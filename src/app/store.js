import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../slices/productSlice";
import trlsReducer from "../slices/trls";
import configsReducer from "../slices/configs";

export default configureStore({
  reducer: {
      product : productReducer,
      trls: trlsReducer,
      configs:configsReducer,
  },
})