import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () =>{
    return(dispatch) =>{

            //loading
            dispatch({
            type:GET_LIST_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
    })
        //get Api
        axios ({
            method:'get',
            url:'http://localhost:3000/kontaks',
            timeout:12000
        })
        .then((respone)=>{
            //berhasil
            dispatch({
                type:GET_LIST_KONTAK,
                payload:{
                    loading:true,
                    data:respone.data,
                    errorMessage:false
                }
            })
        })
}}