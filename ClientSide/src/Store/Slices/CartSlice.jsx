import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  quantity: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      const newitem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newitem.id);

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newitem.price;
      } else {
        state.products.push({
          id: newitem.id,
          title: newitem.title,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          proimg: newitem.proimg,
        });
      }
      //update the entire cart
      state.totalPrice += newitem.price;
      state.quantity++;
    },
    remove(state, action) {
      const id = action.payload;
      const itemToRemove = state.products.find((item) => item.id === id);
      if (itemToRemove) {
        // Update the total price and quantity before filtering out the item
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.quantity -= itemToRemove.quantity;

        // Remove the item from the products array
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        console.log("Item not found in cart:", id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const finditem = state.products.find((item) => item.id === id);
      if (finditem) {
        state.quantity++;
        state.totalPrice += finditem.price;
        finditem.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const finditem = state.products.find((item) => item.id === id);
      if (finditem.quantity > 1) {
        if (finditem) {
          state.quantity--;
          state.totalPrice -= finditem.price;
          finditem.quantity--;
        }
      }
    },
  },
});
export const { addtocart, remove, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
