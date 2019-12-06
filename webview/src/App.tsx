import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Index from './views/Index'

const App: React.FC = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" component={()=> <Index/>} />
        </Switch>
    </Router>
  )
}

export default App;
