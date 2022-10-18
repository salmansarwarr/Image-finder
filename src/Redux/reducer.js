import { CLOSE_DIALOG, SET_AMOUNT, SET_DIALOG, SET_IMAGES, SET_SEARCH_VALUE } from './types'

const initState = {
    searchValue: "",
    amount: 15,
    images: [],
    open: false,
    currentImg: ""
}

function reducer(state = initState, action) {
    switch (action.type) {
        case SET_IMAGES:
            return ({
                ...state,
                images: action.payload.images
            })

        case SET_SEARCH_VALUE:
            return ({
                ...state,
                searchValue: action.payload.searchValue
            })

        case SET_AMOUNT:
            return ({
                ...state,
                amount: action.payload.amount
            })

        case SET_DIALOG:
            return ({
                ...state,
                open: action.payload.open,
                currentImg: action.payload.img
            })

        case CLOSE_DIALOG:
            return ({
                ...state,
                open: action.payload.open,
            })

        default:
            return state;
    }
}

export default reducer