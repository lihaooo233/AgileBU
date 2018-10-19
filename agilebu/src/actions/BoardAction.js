export const boardChange = (payload) => dispatch => {
  console.log(payload)
  dispatch({
    type: 'BOARD_CHANGE',
    payload: payload
  })
}