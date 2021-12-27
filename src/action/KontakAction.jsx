import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";


export const getListKontak = () =>{
    console.log("2. masuk action")
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
            console.log ("3. berhasil",respone.data);
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
        .catch((error)=>{
            console.log ("3. gagal",error.message);
            //gagal
            dispatch({
                type:GET_LIST_KONTAK,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.message
                }
            })
        })
    }
}
