import './App.css';
import { Switch, Route } from 'react-router-dom';
import DisplayContainer from './DisplayContainer';
import ViewArticleContainer from './ViewArticleContainer';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <DisplayContainer />
        </Route>
        <Route path='/item/:itemId'>
          <ViewArticleContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
