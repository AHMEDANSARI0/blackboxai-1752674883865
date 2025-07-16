import React from 'react';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <h1>Dashboard</h1>
        <div className="stat-summary">
          <div className="stat-item">
            <strong>$53,000</strong>
            <span>Today's Money</span>
          </div>
          <div className="stat-item">
            <strong>2,300</strong>
            <span>Today's Users</span>
          </div>
          <div className="stat-item">
            <strong>+3,462</strong>
            <span>New Clients</span>
          </div>
          <div className="stat-item">
            <strong>$103,430</strong>
            <span>Sales</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
