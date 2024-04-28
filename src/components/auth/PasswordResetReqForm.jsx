/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import authService from '../../services/auth.service';
import Info from '../notifications/Info';
import Error from '../notifications/Error';
import Success from '../notifications/Success';


const PasswordResetReqForm = () => {
  const [email, setEmail] = useState('');
  const [infoState, setInfoState] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
    setError("")
    setSuccess("")
    setInfoState(true)
  };

  useEffect(() => {
    // empty
  }, [reload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const requestBody = { email }

    authService.passwordResetEmail(requestBody)
      .then((response) => {
        setIsLoading(false);
        setInfoState(false);
        setSuccess(response.data.message);
        setEmail("");
      })
      .catch((error) => {
        setIsLoading(false);
        setInfoState(false);
        setError(error.response.data.message)
      })
  }

  return (
    <div className = "container">
      <div className = "is-flex is-justify-content-center">
        <p className = "title is-size-4 mt-6">{`< c o d e c a m p />`}</p>
      </div>

      <form onSubmit = {handleSubmit}>
        <div className = "columns my-6">
          <div className = "column is-half is-offset-one-quarter">
            {infoState && <Info message = {"Please provide your email for the password reset link"} /> }
            {error && <Error message = {error} handleReload={handleReload} />}
            {success && <Success message = {success} handleReload={handleReload} />}
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
            <button type = "submit" className = {`button is-primary ${isLoading ? "is-loading" : ""}`}>Request Link</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default PasswordResetReqForm;
