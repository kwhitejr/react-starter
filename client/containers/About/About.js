import Helmet from 'react-helmet';
import React from 'react';

import PageHeading from '../../components/PageHeading';

const About = () => (
  <div>
    <Helmet title='About' />
    <PageHeading text='Welcome' />
    <h1>Whatchu talkin' bout?</h1>
  </div>
);

export default About;
