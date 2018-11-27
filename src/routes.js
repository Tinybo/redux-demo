import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './page/containers/home';
import Music from './page/containers/music';
import About from './page/containers/about';

export default (<Route path="/" component={ App }>
    <Route path="" component={ Home } />
    <Route path="/home" component={ Home } />
    <Route path="/music" component={ Music } />
    <Route path="/about" component={ About } />
    <IndexRoute component={ Home } />
</Route>);