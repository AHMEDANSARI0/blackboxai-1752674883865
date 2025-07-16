import React from 'react';

const DashboardCard = ({ title, value, subtitle }) => {
  return (
    <div className="dashboard-card">
      <h3>{title || "No Title"}</h3>
      <p className="value">{value || "-"}</p>
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </div>
  );
};

export default DashboardCard;
