import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Soft UI Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/tables" className={({ isActive }) => isActive ? 'active' : ''}>
              Tables
            </NavLink>
          </li>
          <li>
            <NavLink to="/billing" className={({ isActive }) => isActive ? 'active' : ''}>
              Billing
            </NavLink>
          </li>
          <li>
            <NavLink to="/virtual-reality" className={({ isActive }) => isActive ? 'active' : ''}>
              Virtual Reality
            </NavLink>
          </li>
          <li>
            <NavLink to="/rtl" className={({ isActive }) => isActive ? 'active' : ''}>
              RTL
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-in" className={({ isActive }) => isActive ? 'active' : ''}>
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" className={({ isActive }) => isActive ? 'active' : ''}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
