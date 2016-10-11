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
    const workouts = fetch(`../../config/workouts`);
    const selectedWorkout = workouts.filter(x => x.id === workoutId);
    console.log(selectedWorkout);

    dispatch(receiveWorkout(selectedWorkout));
  }
}