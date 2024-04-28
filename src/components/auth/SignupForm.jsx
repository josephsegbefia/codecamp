/* eslint-disable no-unused-vars */
import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import Success from '../notifications/Success';
import Error from '../notifications/Error';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [honeyPot, setHoneyPot] = useState('');
  const [reload, setReload] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleReload = () => {
    setReload(!reload);
    setError("")
    setSuccess("");
  };

  useEffect(() => {
    // empty
  }, [reload]);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if(honeyPot){
      setIsLoading(false);
      return;
    }
    if(password !== repeatPassword){
      setError("Please set matching password");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const requestBody = {firstName, lastName, email, password};
    authService.signup(requestBody)
      .then((response) => {
        setIsLoading(false);
        setSuccess("Please verify your account. A verification email has been sent to your email");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setFirstName("");
        setLastName("")
        setShowPassword(false);
        setShowRepeatPassword(false);

        // navigate('/auth/login');
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.response.data.message);
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setFirstName("");
        setLastName("")
        setShowPassword(false);
        setShowRepeatPassword(false);
      })
  }


  return (
    <div className = "container">
      <div className = "is-flex is-justify-content-center my-3">
        <p className = "title is-size-4 mt-6">{`< c o d e c a m p />`}</p>
      </div>


      <form onSubmit={handleSignupSubmit}>
        <div className = "columns">
          <div className = "column is-half is-offset-one-quarter">
          {
              success && (
              <Success message = {success} handleReload={handleReload} />
              )
            }
            {
              error && (
                <Error message = {error} handleReload={handleReload}/>
              )
            }
          </div>
        </div>
        <div className = "columns">
          <div className = "column is-one-quarter is-offset-one-quarter">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  required
                  className="input is-primary"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                  <span className ="icon is-small is-left">
                    <FaRegUser />
                  </span>
              </div>
            </div>
          </div>

          <div className = "column is-one-quarter">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  required
                  className="input is-primary"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                  <span className ="icon is-small is-left">
                    <FaRegUser />
                  </span>
              </div>
            </div>
          </div>
        </div>

        <div className = "columns">
          <div className = "column is-half is-offset-one-quarter">
            <div className="field">
              <div className="control has-icons-left">
                <input
                  required
                  className="input is-primary"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className = "icon is-small is-left">
                  <MdOutlineMailOutline />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className = "columns"> */}
          {/* <div className = "column is-half is-offset-one-quarter"> */}
            <div className="field">
              <p className="control">
                <input
                  style={{display: "none"}}
                  className="input is-primary"
                  type="email"
                  placeholder="Email"
                  value={honeyPot}
                  onChange={(e) => setHoneyPot(e.target.value)}
                />
              </p>
            </div>
          {/* </div> */}
        {/* </div> */}
        <div className = "columns">
          <div className = "column is-half is-offset-one-quarter">
            <p className = "help is-info">Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.</p>
          </div>
        </div>

        <div className = "columns">
          <div className = "column is-one-quarter is-offset-one-quarter">
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  required
                  className="input is-primary"
                  type= {showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className = "icon is-small is-left">
                  <RiLockPasswordLine />
                </span>
                <span className = "icon is-small is-right is-clickable" onClick = {() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </span>
              </div>
            </div>
          </div>

          <div className = "column is-one-quarter">
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  required
                  className="input is-primary"
                  type= {showRepeatPassword ? "text" : "password"}
                  placeholder="Repeat Password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <span className = "icon is-small is-left">
                  <RiLockPasswordLine />
                </span>
                <span className = "icon is-small is-right is-clickable" onClick = {() => setShowRepeatPassword(!showRepeatPassword)}>
                  {showRepeatPassword ? <FiEye /> : <FiEyeOff />}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className = "columns">
          <div className = "column is-half is-offset-one-quarter">
            <p className="control">
              <button className = {`button is-primary ${isLoading ? "is-loading" : ""}`} >
                Sign Up</button>
            </p>
          </div>
        </div>

        <div className = "columns">
          <div className = "column is-one-quarter is-offset-one-quarter">
            <p className = "mb-3">Already have an account?</p>
            <Link to={"/auth/login"}>Login</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
