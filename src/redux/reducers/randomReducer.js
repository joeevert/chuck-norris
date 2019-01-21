const randomJokeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RANDOM_JOKE':
      return action.payload;
    default:
      return state;
  }
}

export default randomJokeReducer;