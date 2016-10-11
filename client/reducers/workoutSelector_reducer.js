function receiveWorkout(state, selectedWorkout) {
  const newObj = {
    selectedWorkout: selectedWorkout
  };
  console.log(newObj);
  return Object.assign({}, state, newObj);
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'RECEIVE_WORKOUT':
    return receiveWorkout(state, action.selectedWorkout);
  }
  return state;
}
