import { CLOSE_DIALOG, SET_AMOUNT, SET_DIALOG, SET_IMAGES, SET_SEARCH_VALUE } from "./types";

export function setImages(images) {
    return({
        type: SET_IMAGES,
        payload: {
            images
        }
    })
}

export function setSearchValue(searchValue) {
    return({
        type: SET_SEARCH_VALUE,
        payload: {
            searchValue
        }
    })
}

export function setAmount(amount) {
    return({
        type: SET_AMOUNT,
        payload: {
            amount
        }
    })
}

export function setDialog(img) {
    return({
        type: SET_DIALOG,
        payload: {
            open: true,
            img
        }
    })
}

export function closeDialog() {
    return({
        type: CLOSE_DIALOG,
        payload: {
            open: false
        }
    })
}