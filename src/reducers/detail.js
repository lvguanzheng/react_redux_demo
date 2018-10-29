import actions from '../actions/Index'

const detail = (state = initVal, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
      }
    default:
      return state
  }
}

const initVal = {
  detail: {},
}

export default detail
