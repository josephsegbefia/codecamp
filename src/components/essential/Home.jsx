/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const gotoSignup = () => {
    navigate('/auth/signup');
  };

  return (
    <div className="container">
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-three-fifths">
          <div className="has-text-centered">
            <h1 className="title is-2 mb-4">Learn to code,</h1>
            <h2 className="subtitle is-4 mb-4">at your own pace</h2>
            <p className="mb-6">
              Welcome to our coding platform, where you can learn to code at your own pace. Explore interactive tutorials, projects, and challenges. Connect with a vibrant community and track your progress. Start your coding journey today!
            </p>
            <div className="buttons">
              <button onClick={gotoSignup} className="button is-primary is-large mr-4">Get Started for Free</button>
              <button className="button is-link is-outlined is-large">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
