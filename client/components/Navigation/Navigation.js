import React from 'react';
import {Link} from 'react-router';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>Aboot</Link></li>
    </ul>
  </nav>
);

export default Navigation;
