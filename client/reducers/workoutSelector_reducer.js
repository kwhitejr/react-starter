function receiveWorkout(state, selectedWorkout) {
  const newObj = {
    workout: selectedWorkout
  };
  return Object.assign({}, state, newObj);
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'RECEIVE_WORKOUT':
    return setState(state, action.selectedWorkout);
  }
  return state;
}
