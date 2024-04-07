import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar  justify-content-between">
        <div className="navbar-logo ">
          <img src="/DF_logo.jpg" alt="" />
          <h2 classNameName="text-light ">DigitalFlake</h2>
        </div>

        <div className="profile">
          <button className="btn profileicon my-2 my-sm-0" type="submit">
            <img src="/profile.png" alt="" />
          </button>
        </div>
      </nav>
  )
}

export default Navbar