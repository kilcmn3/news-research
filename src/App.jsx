import './App.css';
import { Switch, Route } from 'react-router-dom';
import DisplayContainer from './DisplayContainer';
import ViewArticleContainer from './ViewArticleContainer';
import UserContainer from './UserContainer';

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
        <Route path='/user/:userName'>
          <UserContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
