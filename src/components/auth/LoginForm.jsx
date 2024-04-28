/* eslint-disable no-unused-vars */
import React, {useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { AuthContext } from '../../context/auth.context';
import authService from '../../services/auth.service';
import Error from '../notifications/Error';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [reload, setReload] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  console.log(showPassword);


  const { storeToken, authenticateUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleReload = () => {
    setReload(!reload);
    setError("")
  };

  useEffect(() => {
    // empty
  }, [reload]);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = { email, password };
      authService.login(requestBody)
        .then((response) => {
          storeToken(response.data.authToken);
          authenticateUser();
          setIsLoading(false);
          // setSignInMessage("Sign in successful");
          navigate('/learning?page=dashboard');
      })
        .catch((error) => {
          setError(error.response.data.message);
          setIsLoading(false);
          setEmail('');
          setPassword('');
        })

  }
  return (
    <div className = "container">
      <div className = "is-flex is-justify-content-center">
        <p className = "title is-size-4 mt-6">{`< c o d e c a m p />`}</p>
      </div>


      <form onSubmit = {handleLogin}>
        <div className = "columns my-6">
          <div className = "column is-half is-offset-one-quarter">
            {
              error && (
              <Error message = {error} handleReload={handleReload} />
              )
            }
            <div className = "field mb-4">
              <label className = "label">Email</label>
              <div className = "control has-icons-left">
                <input
                  required
                  className = "input is-primary"
                  type = "text"
                  placeholder = "Email"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
                <span className ="icon is-small is-left">
                  <MdOutlineMailOutline />
                </span>
              </div>
            </div>

            <div className = "field mb-4">
              <label className = "label">Password</label>
              <div className = "control has-icons-left has-icons-right">
                <input
                  required
                  className = "input is-primary"
                  type = {showPassword ? "text" : "password"}
                  placeholder = "Password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                />
                <span className ="icon is-small is-left">
                  <RiLockPasswordLine />
                </span>
                <span className ="icon is-small is-right is-clickable" onClick = {handleShowPassword}>
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </span>

              </div>
            </div>
            <button type = "submit" className = {`button is-primary ${isLoading ? "is-loading" : ""}`}>Login</button>
          </div>
        </div>

        <div className = "columns">
          <div className = "column is-half is-offset-one-quarter">
            <p>Don&apos;t have an account yet?</p>
            <p className = "mb-3">Can&apos;t remember your password? Reset it <Link to = {'/auth/request-password-reset'}>here</Link></p>
            <Link to={"/auth/signup"} className = "login-signup-buttons"> Sign Up</Link>
          </div>
        </div>
      </form>
    </div>

  )
}

export default LoginForm
