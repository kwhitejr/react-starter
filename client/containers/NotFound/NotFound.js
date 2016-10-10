import Helmet from 'react-helmet';
import React from 'react';

const NotFound = () => (
  <div>
    <Helmet title='404: Page Not Found' />
    <h1>404: This is not the page you are looking for.</h1>
  </div>
);

export default NotFound;
