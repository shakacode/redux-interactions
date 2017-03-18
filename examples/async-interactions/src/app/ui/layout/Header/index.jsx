import React from 'react';

import Logo from './Logo';
import StatusWidget from './StatusWidget';

import './index.css';

const Header = () => (
  <div className="header">
    <Logo />
    <StatusWidget />
  </div>
);

export default Header;
