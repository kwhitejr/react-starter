function setExerciseData(state, data) {
  const newObj = {
    currentWorkout: data
  };
  return Object.assign({}, state, newObj);
}

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_EXERCISE_DATA':
      return setExerciseData(state, action.data);
  }
  return state;
}