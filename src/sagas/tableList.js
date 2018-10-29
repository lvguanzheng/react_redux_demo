import { put, takeEvery } from 'redux-saga/effects'

import {
    TEST_START_REQUEST,
    TEST_START_SUCCESS,
    TEST_START_FAIL,
} from '../actions/Index'

function* tableList(action) {
    try {
        const {
            payload: {
                data,
            },
        } = action
        console.log('action', action)
        yield put({ type: TEST_START_SUCCESS, data })
    } catch (e) {
        yield put({ type: TEST_START_FAIL, message: e })
    }
}

function* tableListSaga() {
    yield takeEvery(TEST_START_REQUEST, tableList)
}

export default tableListSaga
