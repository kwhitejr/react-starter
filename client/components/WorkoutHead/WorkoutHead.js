import React, { PropTypes }from 'react';

const WorkoutHead = ({ selectedWorkout }) => {
  return (<div>
    <h1>Day {selectedWorkout.day}: {selectedWorkout.title}</h1>
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
    id:     PropTypes.string.isRequired,
    phase:  PropTypes.string.isRequired,
    week:   PropTypes.string.isRequired,
    day:    PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        sets: PropTypes.number.isRequired,
        reps: PropTypes.array.isRequired,
      }).isRequired
    )
  }).isRequired,
};

export default WorkoutHead;
