import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Header from './layout/Header';

import PostsSection from './sections/posts/ui';
import VideosSection from './sections/videos/ui';
import WorksSection from './sections/works/ui';

import './index.css';


const UI = () => (
  <HashRouter>
    <div className="container">
      <Header />
      <Route path="/" component={PostsSection} />
      <Route path="/videos" component={VideosSection} />
      <Route path="/works" component={WorksSection} />
    </div>
  </HashRouter>
);

export default UI;
