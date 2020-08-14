import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from './Admin';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Admin} />
      </Switch>
      {/* {!isLogin ? <Login /> : <Admin />} */}
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(App);
