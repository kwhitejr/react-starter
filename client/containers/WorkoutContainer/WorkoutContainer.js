import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React, { Component } from 'react';

import WorkoutHead from '../../components/WorkoutHead';
import WorkoutForm from '../../components/WorkoutForm';

class WorkoutContainer extends Component {
  render() {
    return (<div>
      <Helmet title="Workout" />      
      <WorkoutHead {...this.props} />
      <WorkoutForm {...this.props} />
    </div>)
  }
}

const mapStateToProps = (state) => ({
  selectedWorkout: state.workoutSelector.selectedWorkout,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutContainer);

