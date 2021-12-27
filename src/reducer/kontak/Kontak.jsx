import {GET_LIST_KONTAK} from '../../action/KontakAction'

const initialState ={
    getListKontakResult : false,
    getListKontakLoading : false,
    getListKontakError : false

}

const kontak = ( state =initialState, action) =>{
    switch (action.type) {
        case GET_LIST_KONTAK:
            return{
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError : action.payload.errormessage
            }
        default:
            return state;
    }
}

export default kontak 