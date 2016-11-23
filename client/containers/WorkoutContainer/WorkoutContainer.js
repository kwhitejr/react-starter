import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import WorkoutHead from '../../components/WorkoutHead';
import WorkoutWizard from '../../components/WorkoutWizard';

import { storeExerciseData } from '../../actions/workout_actions';

class WorkoutContainer extends Component {
  render() {
    console.log(this.props);
    return (<div>
      <Helmet title="Workout" />      
      <WorkoutHead {...this.props} />
      <WorkoutWizard {...this.props} />
    </div>)
  }
}

const mapStateToProps = (state) => ({
  selectedWorkout: state.selectorReducer.selectedWorkout,
  schedule:        state.selectorReducer.schedule,
});

const mapDispatchToProps = (dispatch) => ({
  storeExerciseData: () => dispatch(storeExerciseData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutContainer);

