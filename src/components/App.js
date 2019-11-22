import React, { useEffect } from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import SignupUser from '../containers/SignupUser';
import './reset.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import Header from './Header';
import MemeList from '../containers/MemesList';
import CreateMeme from '../containers/CreateMeme';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, [sessionId]);

  //logged out
  if(loading) {
    return <h1>Loading . . .</h1>;
  }
  if(!loading && !sessionId) {
    return <Redirect to="/login" />;
  }
  //redirect to login
  //login
  return <Route {...rest} />;
};


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={CreateMeme} />
        <PrivateRoute path="/memes" component={MemeList} />
        <Route path="/login" component={SignupUser} />
      </Switch>
    </Router>
  );
}
