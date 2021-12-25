import { combineReducers } from "redux";
//import combineReducers sebuah function dari package redux untuk menggabungkan object-object state yang kita miliki.

import KontakReducer from './kontak'
//import kontak dari file Kontak.jsx

//export secara default object yang sudah digabung menggunakan combineReducers.
export default combineReducers({
    KontakReducer
})  
