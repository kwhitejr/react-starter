import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import React from 'react';

import SelectorWizard from '../../components/SelectorWizard';
import { fetchWorkout } from '../../actions/selector_actions';

class SelectorContainer extends React.Component {
  render() {
    return (<div>
      <Helmet title='SelectorContainer' />
      <h1>Select-bot</h1>
      <SelectorWizard {...this.props} />
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
