import actions from '../actions/Index'

const info = (state = initVal, action) => {
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
  info: {},
}

export default info
