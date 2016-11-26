import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import WorkoutWizard from '../../components/WorkoutWizard';

import { gatherFormData, storeExerciseData } from '../../actions/workout_actions';

class WorkoutContainer extends Component {
  render() {
    return (<div>
      <Helmet title="Workout" />      
      <WorkoutWizard {...this.props} />
    </div>)
  }
}

const mapStateToProps = (state) => ({
  selectedWorkout: state.selector.selectedWorkout,
});

const mapDispatchToProps = (dispatch) => ({
  gatherFormData:     (exerciseName) => dispatch(gatherFormData(exerciseName)),
  storeExerciseData:  () => dispatch(storeExerciseData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutContainer);

