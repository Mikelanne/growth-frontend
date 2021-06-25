import './App.css';
import PlantsContainer from './containers/plantsContainer'
import Home from './components/home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
          <Route exact path="/plants">
              <PlantsContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
