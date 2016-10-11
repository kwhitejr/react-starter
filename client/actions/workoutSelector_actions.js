function receiveWorkout(selectedWorkout) {
  return {
    type: 'RECEIVE_WORKOUT',
    selectedWorkout,
  }
}

export function fetchWorkout() {
  return (dispatch, getState) => {
    const form = getState().form;
    const workout = {
      phase:  form.selector.phase.value,
      week:   form.selector.week.value,
      day:    form.selector.day.value,
    };
    console.log(workout);
    const workoutId = workout.phase + workout.week + workout.day;
    console.log(workoutId);
    return fetch(`../../config/workouts`)
      .then(response => response.json())
      .then(json => json.filter( workout => return workout.id === workoutId
      ))
      .then(selectedWorkout => dispatch(receiveWorkout(selectedWorkout)));
  }
}