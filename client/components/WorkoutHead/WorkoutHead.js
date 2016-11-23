import React, { PropTypes }from 'react';

const WorkoutHead = ({ selectedWorkout, schedule }) => {
  return (<div>
    <h1>Phase {schedule.phase}, Day {schedule.day}: {selectedWorkout.title}</h1>
    <h3>{selectedWorkout.exercises[0].name}</h3>
    <ul>
      {selectedWorkout.exercises[0].reps.map((rep, i) =>
        (<li key={i}>{rep}</li>)
      )}
    </ul>
  </div>);
};

WorkoutHead.propTypes = {
  selectedWorkout: PropTypes.shape({
    id: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        reps: PropTypes.array.isRequired,
        track: PropTypes.string.isRequired,
      }).isRequired
    )
  }).isRequired,
  schedule: PropTypes.shape({
    phase:    PropTypes.string.isRequired,
    week:     PropTypes.string.isRequired,
    day:      PropTypes.string.isRequired,
  }).isRequired
};

export default WorkoutHead;
