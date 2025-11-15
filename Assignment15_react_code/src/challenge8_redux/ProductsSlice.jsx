import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      { id: 1, name: "Shoes", price: 999 },
      { id: 2, name: "T-Shirt", price: 499 }
    ]
  },
  reducers: {
    increasePrice(state, action) {
      const p = state.items.find((x) => x.id === action.payload);
      p.price += 10;
    }
  }
});

export const { increasePrice } = productsSlice.actions;
export default productsSlice.reducer;







