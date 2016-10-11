import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React from 'react';

import SelectorForm from '../../components/Selector';
import { selectWorkout } from '../../actions/workoutSelector';

const SimpleSelector = () => (
  <div>
    <Helmet title='SimpleSelector' />
    <h1>Select-bot</h1>
    <SelectorForm {...this.props} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  fetchWorkout: () => dispatch(fetchWorkout()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SimpleSelector);