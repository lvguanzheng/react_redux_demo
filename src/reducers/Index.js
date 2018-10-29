import { combineReducers } from 'redux'
import tableList from './tableList'
import detail from './detail'

const reducers = combineReducers({
  tableList,
  detail
})

export default reducers