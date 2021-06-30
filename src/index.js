import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import plantReducer from './reducers/plantReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(plantReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();



  //  {/* <Router>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route exact path="/plants" component={plantsContainer} />
  //     </Switch> */
  //   <Router /> 
