"use client";
import React from 'react';

export default function TeamPage() {
  const members = [
    { name: 'Alex Johnson', role: 'Admin', status: 'Online', emoji: '🧑‍💻' },
    { name: 'Sarah Connor', role: 'Developer', status: 'Online', emoji: '👩‍💻' },
  ];

  return (
    <div className="data-card">
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Team</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, i) => (
              <tr key={i}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
