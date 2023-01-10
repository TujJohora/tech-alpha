import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetching,
} from "../features/products/productSlice";
// obejct will go as an argument
// obejct has many properties, among them there is a common property called reducer
export const store = configureStore({
  reducer: {
    //multiple reducers goes here
    products: productsReducer,
  },
});

store.dispatch(productsFetching());
