/* eslint-disable no-unused-vars */
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import "./assets/styles.scss";
import RoutesComp from "./components/essential/Routes";
import Home from "./components/essential/Home";
import Nav from "./components/essential/Nav";
import SignupForm from "./components/auth/SignupForm";
import LoginForm from "./components/auth/LoginForm";
import PasswordResetReqForm from "./components/auth/PasswordResetReqForm";
import PasswordResetForm from "./components/auth/PasswordResetForm";
import Landing from "./components/userHome/Landing";
import AdminLanding from "./components/admin/AdminLanding";
import IsPrivate from "./components/auth/IsPrivate";
import IsAdmin from "./components/auth/IsAdmin";
import IsAnon from "./components/auth/IsAnon";
import AllResources from "./components/admin/AllResources";
import Courses from "./components/programs/Courses";

function App() {
  const routes = RoutesComp();

  return (
    <Router>
      <header>
        <Nav routes={routes} />
      </header>
      <div className="section">
        <div className="columns">
          <div className="column">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path = "/auth/verify-email" element={<VerifyEmail />}/> */}
              <Route
                path="/auth/signup"
                element={
                  <IsAnon>
                    <SignupForm />
                  </IsAnon>
                }
              />
              <Route
                path="/auth/login"
                element={
                  <IsAnon>
                    <LoginForm />
                  </IsAnon>
                }
              />
              <Route
                path="/auth/request-password-reset"
                element={<PasswordResetReqForm />}
              />
              <Route
                path="/auth/password-reset"
                element={<PasswordResetForm />}
              />
              <Route
                path="/learning"
                element={
                  <IsPrivate>
                    <Landing />
                  </IsPrivate>
                }
              />
              <Route
                path="/admin/landing"
                element={
                  <IsAdmin>
                    <AdminLanding />
                  </IsAdmin>
                }
              />
              <Route path="/courses" element={<Courses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
