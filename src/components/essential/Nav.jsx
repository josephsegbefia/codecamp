/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';


const Nav = ({ routes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const toggleBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SubNav = ({ routes, parentRoutePath }) => (
    <>
      {routes.map((route, index) => (
        <Link key={index} to={`${parentRoutePath}${route.url}`} className="navbar-item">
          {route.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <NavLink to={'/'} className="navbar-item">{`< c o d e c a m p />`}</NavLink>
        <a
          role="button"
          className={`navbar-burger burger ${isMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isMenuOpen}
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-start">
          {routes.map((route, index) => {
            if (route.subnav) {
              return (
                <div key={index} className="navbar-item has-dropdown is-hoverable">
                  <Link to={route.url} className="navbar-link">
                    {route.name}
                  </Link>
                  <div className="navbar-dropdown">
                    <SubNav routes={route.subnav} parentRoutePath={route.url} />
                  </div>
                </div>
              );
            }

            return (
              <Link key={index} to={route.url} className="navbar-item">
                {route.name}
              </Link>
            );
          })}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                isLoggedIn && (
                  <Link to="/" className="button is-light" onClick={logOutUser}>
                    Log out
                  </Link>
                )
              }
              {
                !isLoggedIn && (
                  <>
                    <Link to="/auth/login" className="button is-primary">
                      <strong>Login</strong>
                    </Link>
                    <Link to="/auth/signup" className="button is-light">
                      Signup
                    </Link>
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
