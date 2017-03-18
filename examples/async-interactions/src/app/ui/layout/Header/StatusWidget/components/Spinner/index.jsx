import React from 'react';
import SpinKit from 'react-spinkit';

import './index.css';


const Spinner = () => (
  <div className="status-spinner-wrapper">
    <SpinKit spinnerName="chasing-dots" noFadeIn />
  </div>
);

export default Spinner;
