import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <a className="navbar-brand" href="#">Climate Catalyst</a>
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
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">How you can Impact?</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> </a>
      </li>
      </ul>
  </div>
</nav>

  )
}

export default Navbar
