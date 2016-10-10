import Helmet from 'react-helmet';
import React from 'react';

import WorkoutForm from '../../components/WorkoutForm';

const About = () => (
  <div>
    <Helmet title='About' />
    <h1>Whatchu talkin' bout?</h1>
    <WorkoutForm />
  </div>
);

export default About;
