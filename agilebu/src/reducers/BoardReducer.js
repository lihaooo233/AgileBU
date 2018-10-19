const initialState = {
  boardList: {}
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'BOARD_CHANGE':
      return {
        boardList: action.payload
      }
    default:
      return state
  }
}

export default board