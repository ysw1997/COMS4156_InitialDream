export const initialState = {
  basket: [],
  user: null
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_HEALTH_CODE':
      // logic for get code
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default reducer
