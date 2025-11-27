import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "ProductSliceData",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      return state.cart.push(action.payload);
    }
  }
})

export default productSlice.reducer;
export const {addToCart} = productSlice.actions;


const product={name:"Tv"}


