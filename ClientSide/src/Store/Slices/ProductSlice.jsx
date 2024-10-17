import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  SerchTerm: "",
  FilterData: [],
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      // console.log("slice data", state);
    },
    //for serch item avaiable for shoping
    SearchData(state, action) {
      state.SerchTerm = action.payload;
      state.FilterData = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.SerchTerm.toLowerCase())
      );
      console.log("search term", state.SerchTerm);
    },
  },
});
export const { setProducts, SearchData } = ProductSlice.actions;
export default ProductSlice.reducer;
