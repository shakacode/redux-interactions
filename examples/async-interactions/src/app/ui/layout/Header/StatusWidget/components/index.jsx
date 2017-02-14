import React from 'react';

import Spinner from './Spinner';

import './index.css';


const StatusWidget = ({ isFetching, isProcessing }) => {
  if (isFetching) return (
    <div className="status status-active">
      [ {<Spinner />} Loading posts... ]
    </div>
  );

  if (isProcessing) return (
    <div className="status status-active">
      [ {<Spinner />} Updating post... ]
    </div>
  );

  return (
    <div className="status status-on-hold">
      [ All good ]
    </div>
  );
};

export default StatusWidget;
