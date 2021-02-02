import * as actionTypes from './actionTypes';


const intialize = {
    users: [],
    modalState: false,
    editableProfile: [],
    popup: {
        visible: false,
        context: '',
        action: '',
        data: ''
    }
}

const reducer = (state = intialize, action) =>{
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            return {
                ...state,
                users: action.data,
               
            }
        case actionTypes.MODAL_OPEN: 
            return {
                ...state,
                modalState: true
            }
        case actionTypes.MODAL_CLOSE: 
            return {
                ...state,
                modalState: false
            }
        case actionTypes.ADD_NEW_USER: 
            const updatedUser = {users: [...state.users,{...action.data, id: Math.floor(Math.random()*10)+action.data.userName}]}
            return {
                ...state,
                ...updatedUser
            }
        case actionTypes.REMOVE_USER_INITIATE: 
            return {
                ...state,
                popup: {
                    visible: true,
                    context: 'Are you sure? you want to remove this users!',
                    action: 'Remove',
                    data: action.userId
                }
            }
        case actionTypes.REMOVE_USER: 
            const currentUsers = [...state.users];
            const newUpdatedUser  = currentUsers.filter(usr => usr.id !== action.userId);
            return {
                ...state,
                users: newUpdatedUser
            }
        case actionTypes.EDIT_USER_INFO_INITIATE: 
            const exisitingUsers = [...state.users];
            const profile = exisitingUsers.filter(usr => usr.id === action.userId);
            return {
                ...state,
                editableProfile: [...profile],
                modalState: true,
            }
        case actionTypes.EDIT_USER_INFO: 
            const exisiting = [...state.users];
            exisiting.forEach((element, index) => {
                if(element.id === action.data.id) {
                    exisiting[index] = action.data
                }
            })
            return {
                ...state,
                modalState: false,
                editableProfile: [],
                users: exisiting
            }
        case actionTypes.POPUP_CLOSE: 
            return {
                ...state,
                popup: {
                    visible: false,
                    context: '',
                    action: '',
                    data: ''
                }
            }
        default:
            return {
                ...state
            };
    }
}


export default reducer