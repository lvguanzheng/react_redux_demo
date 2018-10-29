import { all } from 'redux-saga/effects'

import tableListSaga from './tableList'

function* rootSaga() {
    yield all([
        tableListSaga()
    ])
}

export default rootSaga
