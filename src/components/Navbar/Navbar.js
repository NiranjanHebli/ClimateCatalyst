import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand" to="/">Climate Catalyst</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  
    <ul className="navbar-toggler-icon">
      <li className="nav-item">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>

  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">How you can Impact?</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"to="/news">News </Link>
      </li>

      </ul>
      {isAuthenticated ? (
            <li>

              <button
                className="mx-1 btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="mx-1 btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={()=>loginWithRedirect()}
              >
                Login
              </button>
            </li>
          )}
  </div>
</nav>

  )
}

export default Navbar
