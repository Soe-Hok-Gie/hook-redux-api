import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "DETAIL_KONTAK";


export const getListKontak = () =>{
    // console.log("2. masuk action")
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
            method:'GET',
            url:'http://localhost:3000/kontaks',
            timeout:12000
        })
        .then((respone)=>{
            // console.log ("3. berhasil",respone.data);
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
            // console.log ("3. gagal",error.message);
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

export const addKontak = (data) =>{
    // console.log("2. masuk action")
    return(dispatch) =>{

            //loading
            dispatch({
            type:ADD_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
    })
        //kirim data ke Api
        axios ({
            method:'POST',
            url:'http://localhost:3000/kontaks',
            timeout:12000,
            data : data
        })
        .then((respone)=>{
            // console.log ("3. berhasil",respone.data);
            //berhasil
            dispatch({
                type:ADD_KONTAK,
                payload:{
                    loading:true,
                    data:respone.data,
                    errorMessage:false
                }
            })
        })
        .catch((error)=>{
            // console.log ("3. gagal",error.message);
            //gagal
            dispatch({
                type:ADD_KONTAK,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.message
                }
            })
        })
    }
}

export const deleteKontak = (id) =>{
    console.log("2. masuk action")
    return(dispatch) =>{

            //loading
            dispatch({
            type:DELETE_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
    })
        //kirim data ke Api
        axios ({
            method:'DELETE',
            url:'http://localhost:3000/kontaks/'+id,
            timeout:12000,
        })
        .then((respone)=>{
            console.log ("3. berhasil",respone.data);
            //berhasil
            dispatch({
                type:DELETE_KONTAK,
                payload:{
                    loading:true,
                    data:respone.data,
                    errorMessage:false
                }
            })
        })
        .catch((error)=>{
            // console.log ("3. gagal",error.message);
            //gagal
            dispatch({
                type:DELETE_KONTAK,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.message
                }
            })
        })
    }
}
export const detailKontak = (data) =>{
    return(dispatch) =>{
            dispatch({
            type:DETAIL_KONTAK,
            payload:{
                data:data,
            }
        })
    }
}
export const updateKontak = (data) =>{
    console.log("2. masuk action")
    return(dispatch) =>{

            //loading
            dispatch({
            type:UPDATE_KONTAK,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
    })
        //kirim data ke Api
        axios ({
            method:'PUT',
            url:'http://localhost:3000/kontaks'+data.id,
            timeout:12000,
            data : data
        })
        .then((respone)=>{
            console.log ("3. berhasil",respone.data);
            //berhasil
            dispatch({
                type:UPDATE_KONTAK,
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
                type:UPDATE_KONTAK,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.message
                }
            })
        })
    }
}