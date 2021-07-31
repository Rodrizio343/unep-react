import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "carrito",
  initialState: {
    carritoCompra: [],
    productos: [],
    totalProducts: 0,
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
      let productExist = state.carritoCompra.find((prod) => {
        return prod.id === producto.id;
      });
      if (!productExist) {
        state.carritoCompra.push({ ...producto, cantidad: 1 });
      } else {
        productExist.cantidad += 1;
      }
    },
    removeFromCart: (state, {payload: producto}) => {
      let productToRemove = state.carritoCompra.find((prod) => {
        return prod.name === producto.name
      })
      let indexRemove = state.carritoCompra.indexOf(productToRemove) - 1;
      state.carritoCompra.splice(indexRemove, 1);
    },
    countProducts: (state) => {
      let resultado = 0;
      state.carritoCompra.forEach((prod) => {
        resultado += prod.cantidad;
      });
      state.totalProducts = resultado;
    },
  },
});

export const { openCarrito, closeCarrito, addProduct, countProducts, removeFromCart } = carritoSlice.actions;

export const showCarrito = (state) => state.carrito.showCarrito;

export const getCarrito = (state) => state.carrito.carritoCompra;

export const getTotalProducts = (state) => state.carrito.totalProducts;

export default carritoSlice.reducer;
