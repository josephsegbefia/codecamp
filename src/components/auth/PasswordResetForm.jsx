/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Success from '../notifications/Success';
import Error from '../notifications/Error';
import Info from '../notifications/Info';
import authService from '../../services/auth.service';
import { useSearchParams, useNavigate  } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const PasswordResetForm = () => {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [infoState, setInfoState] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const passwordResetToken = searchParams.get('passwordResetToken');
  const requestBody = {password, passwordResetToken};




  const handleReload = () => {
    setInfoState(true);
    setError('');
    setSuccess('');
    setPassword('');
    setRepeatPassword('')
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleShowRepeatPassword = () => {
    setShowRepeatPassword(!showRepeatPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setInfoState(false);

    if(password !== repeatPassword){
      setError("Set matching passwords!");
      setIsLoading(false);
      return;
    }

    authService.passwordReset(requestBody)
      .then((response) => {
        setIsLoading(false);
        setSuccess(response.data.message);
      })
      .catch((error) => {
        setError(error.response.data.message)
      })
  }

  return (
    <div className = "container">
      <div className = "is-flex is-justify-content-center">
        <p className = "title is-size-4 mt-6">{`< c o d e c a m p />`}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className = "columns my-3">
          <div className = "column is-half is-offset-one-quarter">
            {
              infoState && (
                <Info message = {"Please provide a new password here."} />
              )
            }
            {
              error && (
              <Error message = {error} handleReload={handleReload} />
              )
            }
            {
              success && (
                <Success message = {success} handleReload = {handleReload} />
              )
            }
          </div>
        </div>

        <div className = "columns">
            <div className = "column is-half is-offset-one-quarter">
              <div className = "field">
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
            </div>
          </div>
          <div className = "columns">
            <div className = "column is-half is-offset-one-quarter">
              <p className = "help is-info">Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.</p>
            </div>
          </div>

          <div className = "columns">
            <div className = "column is-half is-offset-one-quarter">
              <div className = "field">
                <label className = "label">Confirm Password</label>
                <div className = "control has-icons-left has-icons-right">
                  <input
                    required
                    className = "input is-primary"
                    type = {showRepeatPassword ? "text" : "password"}
                    placeholder = "Password"
                    value = {repeatPassword}
                    onChange = {(e) => setRepeatPassword(e.target.value)}
                  />
                  <span className ="icon is-small is-left">
                    <RiLockPasswordLine />
                  </span>
                  <span className ="icon is-small is-right is-clickable" onClick = {handleShowRepeatPassword}>
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
                Create new password</button>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PasswordResetForm
