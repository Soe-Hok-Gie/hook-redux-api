import { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, DETAIL_KONTAK } from '../../action/KontakAction'


const initialState = {
    getListKontakResult: false,
    getListKontakLoading: false,
    getListKontakError: false,

    addKontakResult: false,
    addKontakLoading: false,
    addKontakError: false,

    deleteKontakResult: false,
    deleteKontakLoading: false,
    deleteKontakError: false,

    detailKontakResult: false
}

const kontak = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KONTAK:
            // console.log("4. masuk reduce :",action)
            return {
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError: action.payload.errormessage
            }
        case ADD_KONTAK:
            // console.log("4. masuk reduce :", action)
            return {
                ...state,
                addKontakResult: action.payload.data,
                addKontakLoading: action.payload.loading,
                addKontakError: action.payload.errormessage
            }
        case DELETE_KONTAK:
            // console.log("4. masuk reduce :", action)
            return {
                ...state,
                deleteKontakResult: action.payload.data,
                deleteKontakLoading: action.payload.loading,
                deleteKontakError: action.payload.errormessage
            }
        case DETAIL_KONTAK:
            console.log("4. masuk reduce :", action)
            return {
                ...state,
                detailKontakResult: action.payload.data
            }
        default:
            return state;
    }
}

export default kontak 