import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <ToastContainer theme="colored"/>
      <Route exact path='/' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/favorites' component={Favorites} />
    </Fragment>
  );
}

export default App;
