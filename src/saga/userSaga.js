import { put } from 'redux-saga/effects'
import * as actionTypes from '../store/actionTypes';

const delay = timeout => new Promise(res => setTimeout(res, timeout))

export function* userstoreSaga (action) {
    yield delay(1000)
    yield put({
        type: actionTypes.GET_ALL_USERS,
        data: [{
            id: 'ww1',
            userName: 'loki',
            firstName: 'loki',
            lastName: 'mac',
            age: '27',
            salary: 'INR10000'
        }]
    })

}