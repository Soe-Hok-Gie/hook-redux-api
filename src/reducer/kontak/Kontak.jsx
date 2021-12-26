import {GET_LIST_KONTAK} from '../../action/KontakAction'

const initialState ={
    getListKontakResult : false,
    getListKontakLoading : false,
    getListKontakError : false

}

const kontak = ( state =initialState, action) =>{
    switch (action.type) {
        default:
            return state;
    }
}

export default kontak 