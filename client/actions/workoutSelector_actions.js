import workouts from '../../config/workouts';

function receiveWorkout(selectedWorkout) {
  console.log('received workout');
  return {
    type: 'RECEIVE_WORKOUT',
    selectedWorkout,
  }
}

export function fetchWorkout() {
  return (dispatch, getState) => {
    const form = getState().form;
    const workout = {
      phase:  form.selector.values.phase,
      week:   form.selector.values.week,
      day:    form.selector.values.day,
    };
    const workoutId = workout.phase + workout.week + workout.day;
    // const workouts = fetch(`../../config/workouts`);
    const selectedWorkout = workouts.filter(x => x.id === workoutId);
    console.log(selectedWorkout[0]);

    dispatch(receiveWorkout(selectedWorkout[0]));
  }
}