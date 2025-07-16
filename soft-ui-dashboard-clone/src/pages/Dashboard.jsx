import React from 'react';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <section className="dashboard-cards">
        <DashboardCard title="Today's Money" value="$53,000" subtitle="+55%" />
        <DashboardCard title="Today's Users" value="2,300" subtitle="+3%" />
        <DashboardCard title="New Clients" value="+3,462" subtitle="-2%" />
        <DashboardCard title="Sales" value="$103,430" subtitle="+5%" />
      </section>
      
      <section className="projects-overview">
        <h2>Projects Overview</h2>
        <p>A quick glance at this month's progress and tasks.</p>
        <div className="projects-list">
          <div className="project-item">
            <h3>Soft UI XD Version</h3>
            <p>Budget: $14,000</p>
            <p>Progress: 60% done</p>
          </div>
          <div className="project-item">
            <h3>Add Progress Track</h3>
            <p>Budget: $3,000</p>
            <p>Progress: 10% done</p>
          </div>
          <div className="project-item">
            <h3>Fix Platform Errors</h3>
            <p>Budget: Not set</p>
            <p>Progress: 100% done</p>
          </div>
          <div className="project-item">
            <h3>Launch our Mobile App</h3>
            <p>Budget: $20,500</p>
            <p>Progress: 100% done</p>
          </div>
          <div className="project-item">
            <h3>Add the New Pricing Page</h3>
            <p>Budget: $500</p>
            <p>Progress: 25% done</p>
          </div>
          <div className="project-item">
            <h3>Redesign New Online Shop</h3>
            <p>Budget: $2,000</p>
            <p>Progress: 40% done</p>
          </div>
        </div>
      </section>
      
      <section className="orders-overview">
        <h2>Orders Overview</h2>
        <p>24% this month</p>
        <ul>
          <li>$2400, Design changes - 22 DEC 7:20 PM</li>
          <li>New order #1832412 - 21 DEC 11 PM</li>
          <li>Server payments for April - 21 DEC 9:34 PM</li>
          <li>New card added for order #4395133 - 20 DEC 2:20 AM</li>
          <li>New card added for order #4395133 - 18 DEC 4:54 AM</li>
          <li>New order #9583120 - 17 DEC</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
