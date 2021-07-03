import './App.css';
import PlantsContainer from './containers/plantsContainer'
import Home from './components/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import FormContainer from './containers/formContainer';
import PlantCategories from './components/PlantCategories'

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
        <Route exact path="/plants/info">
          <PlantCategories />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
