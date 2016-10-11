import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React from 'react';

import SelectorForm from '../../components/Selector';
import { fetchWorkout } from '../../actions/workoutSelector_actions';

class SimpleSelector extends React.Component {
  render() {
    return (<div>
      <Helmet title='SimpleSelector' />
      <h1>Select-bot</h1>
      <SelectorForm {...this.props} />
    </div>)
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchWorkout: () => dispatch(fetchWorkout()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SimpleSelector);