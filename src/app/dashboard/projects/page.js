"use client";
import React from 'react';

export default function ProjectsPage() {
  const projects = [
    { name: 'Website Redesign', status: 'Active', members: 3, updated: '2 days ago' },
    { name: 'Mobile App', status: 'In Progress', members: 5, updated: '5 hours ago' },
    { name: 'Marketing Dashboard', status: 'Completed', members: 2, updated: '1 week ago' },
    { name: 'SaaS Landing Page', status: 'Active', members: 4, updated: '1 day ago' },
  ];

  return (
    <div className="data-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Projects</h2>
        <button className="btn-primary" style={{ padding: '0.6rem 1.25rem', borderRadius: '10px', fontSize: '0.9rem' }}>
          + Create New Project
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Team Members</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td style={{ fontWeight: '600' }}>{project.name}</td>
                <td>
                  <span className={`badge ${
                    project.status === 'Active' ? 'badge-success' : 
                    project.status === 'Completed' ? 'badge-success' : 'badge-pending'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    {Array.from({ length: project.members }).map((_, i) => (
                      <div 
                        key={i} 
                        className="avatar" 
                        style={{ width: '24px', height: '24px', marginLeft: i > 0 ? '-8px' : '0', border: '2px solid white' }}
                      ></div>
                    ))}
                  </div>
                </td>
                <td style={{ color: 'var(--text-muted)' }}>{project.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
