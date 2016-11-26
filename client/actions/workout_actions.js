const SET_EXERCISE_DATA = 'SET_EXERCISE_DATA'

function setExerciseData(exerciseName, value) {
  return {
    type: 'SET_EXERCISE_DATA',
    exerciseName,
    value,
  }
}

// This function should add exercise set data to redux store. Requires companion reducer.
export function gatherFormData(exerciseName) {
  return (dispatch, getState) => {
    const form = getState().form;
    const value = form.workout.values[exerciseName];
    console.log(exerciseName);
    console.log(value);
    dispatch(setExerciseData(exerciseName, value))
  }
}

// this function should take accumulated exercise set data (an array of numbers) and commit it to the database. Does not affect redux store, so no companion reducer required.
export function storeExerciseData(exerciseName) {
  return (dispatch, getState) => {
    const form = getState().form;
    console.log(exerciseName);
    console.log(form);
    const exerciseData = {
      // week:   form.workout.values.week,
      // day:    form.workout.values.day,
    };
    dispatch(setExerciseData(exerciseData));
  }
}