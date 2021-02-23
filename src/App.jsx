import './App.css';
import { Switch, Route } from 'react-router-dom';
import DisplayContainer from './DisplayContainer';
import ViewArticleContainer from './ViewArticleContainer';
import UserContainer from './UserContainer';
import SubmittedContainer from './SubmittedContainer';
import ThreadsContainer from './ThreadsContainer';
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
        <Route path='/submitted/:userName'>
          <SubmittedContainer />
        </Route>
        <Route path='/threads/:userName'>
          <ThreadsContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
