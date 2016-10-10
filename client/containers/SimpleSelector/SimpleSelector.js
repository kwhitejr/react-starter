import Helmet from 'react-helmet';
import React from 'react';

import SelectorForm from '../../components/Selector';

const SimpleSelector = () => (
  <div>
    <Helmet title='SimpleSelector' />
    <h1>Select-bot</h1>
    <SelectorForm />
  </div>
);

export default SimpleSelector;