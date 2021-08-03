import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Fragment>
      <Route exact path='/' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/favorites' component={Favorites} />
    </Fragment>
  );
}

export default App;
