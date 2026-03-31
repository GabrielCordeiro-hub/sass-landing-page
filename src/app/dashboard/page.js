"use client";
import React from 'react';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Users', value: '2,543', change: '+12.5%', icon: '👥' },
    { label: 'Revenue', value: '$45,231', change: '+8.2%', icon: '💰' },
    { label: 'Active Projects', value: '12', change: '0%', icon: '📁' },
    { label: 'Uptime', value: '99.9%', change: '+0.1%', icon: '⚡' },
  ];

  const recentActivity = [
    { id: 1, user: 'Sarah Connor', action: 'Created new project', time: '2 mins ago', status: 'Success' },
    { id: 2, user: 'John Smith', action: 'Deployment failed', time: '15 mins ago', status: 'Failed' },
    { id: 3, user: 'Maria Garcia', action: 'Added team member', time: '1 hour ago', status: 'Success' },
    { id: 4, user: 'David Beck', action: 'API Key generated', time: '3 hours ago', status: 'Success' },
  ];

  return (
    <>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
              <span style={{ 
                color: stat.change.startsWith('+') ? '#059669' : stat.change === '0%' ? '#666' : '#DC2626',
                fontSize: '0.85rem',
                fontWeight: '600'
              }}>
                {stat.change}
              </span>
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="data-card">
        <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Recent Activity</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((activity) => (
                <tr key={activity.id}>
                  <td style={{ fontWeight: '500' }}>{activity.user}</td>
                  <td>{activity.action}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{activity.time}</td>
                  <td>
                    <span className={`badge ${activity.status === 'Success' ? 'badge-success' : 'badge-pending'}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
