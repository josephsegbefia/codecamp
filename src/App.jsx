/* eslint-disable no-unused-vars */
import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './assets/styles.scss'
import RoutesComp from './components/essential/Routes';
import Home from './components/essential/Home';
import Nav from './components/essential/Nav';
import SignupForm from './components/auth/SignupForm';
import LoginForm from './components/auth/LoginForm';
import PasswordResetReqForm from './components/auth/PasswordResetReqForm';
import PasswordResetForm from './components/auth/PasswordResetForm';

function App() {
  const routes = RoutesComp();

  return (
    <Router>
      <header>
        <Nav routes = {routes} />
      </header>
      <div className = "section">
        <div className = "columns">
          <div className = "column">
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/auth/signup" element = {<SignupForm />} />
              <Route path = "/auth/login" element = {<LoginForm />} />
              <Route path = "/auth/request-password-reset" element = {<PasswordResetReqForm/>} />
              <Route path = "/auth/password-reset" element = {<PasswordResetForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
