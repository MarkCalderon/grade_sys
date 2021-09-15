import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header/Index'

// PAGES
import HomePage from './pages/HomePage/Index'
import GradePage from './pages/GradePage/Index'

// STYLES
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/grade" component={GradePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
