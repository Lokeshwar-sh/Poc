import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../store/actionTypes';
import { userstoreSaga } from './userSaga';


export function* watcherSaga() {
    yield takeEvery(actionTypes.GET_ALL_USERS_INITIATE, userstoreSaga)
}
