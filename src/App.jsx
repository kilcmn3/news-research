import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DisplayContainer from './DisplayContainer';
import ViewArticleContainer from './ViewArticleContainer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            <DisplayContainer />
          </Route>
          <Route path='/item?id=:itemId'>
            <ViewArticleContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
