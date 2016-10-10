import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';

import WorkoutForm from '../../components/WorkoutForm';

const WorkoutDay = (workout) => (
  <div>
    <Helmet title="Workout" />
    <h1>{workout.title}</h1>
    <WorkoutForm />
  </div>
);

WorkoutDay.propTypes = {
  workout: PropTypes.shape({
    id:     PropTypes.string.isRequired
    phase:  PropTypes.string.isRequired,
    week:   PropTypes.string.isRequired,
    day:    PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf({
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        sets: React.PropTypes.number.isRequired,
        reps: React.PropTypes.array.isRequired,
      }).isRequired
    })
  }).isRequired,
}

export default WorkoutDay;