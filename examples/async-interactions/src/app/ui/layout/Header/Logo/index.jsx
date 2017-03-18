import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo-link">
      Redux Async Interactions
    </Link>
  </div>
);

export default Logo;
