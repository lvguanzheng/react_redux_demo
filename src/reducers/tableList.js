import { TEST_START_SUCCESS, TEST_START_FAIL } from '../actions/Index'

const tableList = (state = initVal, action) => {
  console.log('from saga action', action)
  switch (action.type) {
    case TEST_START_SUCCESS:
      return {
        ...state,
        inputData: action.data,
      }
    case TEST_START_FAIL:
      alert(action.message)
      return state
    default:
      return state
  }
}

const initVal = {
  inputData: 'no tada',
}

export default tableList
