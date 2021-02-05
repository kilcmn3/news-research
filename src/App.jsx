import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayContainer from './DisplayContainer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            <DisplayContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
