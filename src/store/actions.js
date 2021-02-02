import * as actionTypes from './actionTypes';

export const getAllUsers = () => {
    return {
        type: actionTypes.GET_ALL_USERS_INITIATE
    }
}

export const openAddUserModal = () => {
    return {
        type: actionTypes.MODAL_OPEN
    }
}

export const closeAddUserModal = () => {
    return {
        type: actionTypes.MODAL_CLOSE
    }
}

export const submitAddUser = (data) => {
    return {
        type: actionTypes.ADD_NEW_USER,
        data: data
    }
}

export const onRemoveUserInitiate = (id) => {
    return {
        type: actionTypes.REMOVE_USER_INITIATE,
        userId: id
    }
}

export const onRemoveUser = (id) => {
    return {
        type: actionTypes.REMOVE_USER,
        userId: id
    }
}

export const editUserProfileInitiate = (id) => {
    return {
        type: actionTypes.EDIT_USER_INFO_INITIATE,
        userId: id
    }
}

export const editUserProfile = (data) => {
    return {
        type: actionTypes.EDIT_USER_INFO,
        data: data
    }
}


export const closePopup = () => {
    return {
        type: actionTypes.POPUP_CLOSE
    }
}