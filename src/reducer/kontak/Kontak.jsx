import {GET_LIST_KONTAK,ADD_KONTAK} from '../../action/KontakAction'


const initialState ={
    getListKontakResult : false,
    getListKontakLoading : false,
    getListKontakError : false,

    addKontakResult : false,
    addKontakLoading : false,
    addKontakError : false
}

const kontak = ( state =initialState, action) =>{
    switch (action.type) {
        case GET_LIST_KONTAK:
            // console.log("4. masuk reduce :",action)
            return{
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError : action.payload.errormessage
            }
            case ADD_KONTAK:
                console.log("4. masuk reduce :", action)
                return{
                    ...state,
                    addKontakResult: action.payload.data,
                    addKontakLoading: action.payload.loading,
                    addKontakError : action.payload.errormessage
                }
        default:
            return state;
    }
}

export default kontak 