import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Contacts } from './pages/contacts';
import { Articles } from './pages/articles';
import { NotFound } from './pages/notFound';

toast.configure();

const App = () => {

  useEffect(() => {
    toast.error('Welcome to my blog!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 4000,
    });
  }, []);

  return (
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12">
          <div className="App">
            <Router>
              <div className="navigation">
                <NavLink
                  exact
                  to="/" 
                  className="link"
                  activeClassName="link-active"
                >
                  Home
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink 
                  exact
                  to="/about"
                  className="link"
                  activeClassName="link-active"
                >
                  About
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink
                  exact
                  to="/contacts"
                  className="link"
                  activeClassName="link-active"
                >
                  Contacts
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink
                  to="/articles"
                  className="link"
                  activeClassName="link-active"
                >
                  Articles
                </NavLink>
              </div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/contacts">
                  <Contacts />
                </Route>
                <Route path="/articles/:id">
                  <Articles />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Router>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>

  );

};

export default App;
