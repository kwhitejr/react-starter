const SET_EXERCISE_DATA = 'SET_EXERCISE_DATA'

function setExerciseData(data) {
  return {
    type: SET_EXERCISE_DATA,
    data,
  }
}

export function storeExerciseData() {
  return (dispatch, getState) => {
    const form = getState().form;
    const exerciseData = {
      // phase:  form.workout.values.phase,
      // week:   form.workout.values.week,
      // day:    form.workout.values.day,
    };
    dispatch(setExerciseData(exerciseData));
  }
}