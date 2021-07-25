import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "carrito",
  initialState: {
    carritoCompra: [],
    productos: [],
    showCarrito: false,
    loading: false,
    error: false,
  },
  reducers: {
    openCarrito: (state) => {
      state.showCarrito = true;
    },
    closeCarrito: (state) => {
      state.showCarrito = false;
    },
    addProduct: (state, { payload: producto }) => {
      state.carritoCompra.push(producto);
      console.log(state.carritoCompra)
    },
  },
});

export const { openCarrito, closeCarrito , addProduct} = carritoSlice.actions;

export const showCarrito = (state) => state.carrito.showCarrito;

export const carritoCompra = (state) => state.carrito.carritoCompra;

export default carritoSlice.reducer;
