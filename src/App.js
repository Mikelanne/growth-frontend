import './App.css';
import PlantsContainer from './containers/plantsContainer'
import Home from './components/home'
import NewPlantForm from './components/NewPlantForm'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import FormContainer from './containers/formContainer';

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
        <Route exact path="/plants/new">
          <FormContainer />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
