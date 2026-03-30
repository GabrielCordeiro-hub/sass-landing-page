"use client";
import React from 'react';

export default function ProjectsPage() {
  const projects = [
    { name: 'Website Redesign', status: 'Active', members: 3, updated: '2 days ago' },
    { name: 'Mobile App', status: 'In Progress', members: 5, updated: '5 hours ago' },
  ];

  return (
    <div className="data-card">
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Projects</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr key={i}>
                <td style={{ fontWeight: '600' }}>{project.name}</td>
                <td>{project.status}</td>
                <td style={{ color: 'var(--text-muted)' }}>{project.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
