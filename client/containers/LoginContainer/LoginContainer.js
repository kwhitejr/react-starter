import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React from 'react';

import LoginForm from '../../components/LoginForm';

class SelectorContainer extends React.Component {
  render() {
    return (<div>
      <Helmet title='SelectorContainer' />
      <h1>Select-bot</h1>
      <LoginForm {...this.props} />
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWorkout: () => dispatch(fetchWorkout()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SelectorContainer);