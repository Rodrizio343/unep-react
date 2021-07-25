import { configureStore } from '@reduxjs/toolkit';
import carritoReducer from 'redux/productos/carritoSlice'

export default configureStore({
    reducer:{
        carrito: carritoReducer,
    }
})