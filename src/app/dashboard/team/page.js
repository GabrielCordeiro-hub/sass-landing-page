"use client";
import React from 'react';

export default function TeamPage() {
  const members = [
    { name: 'Alex Johnson', role: 'Admin', status: 'Online', emoji: '🧑‍💻' },
    { name: 'Sarah Connor', role: 'Developer', status: 'Online', emoji: '👩‍💻' },
    { name: 'Maria Garcia', role: 'Designer', status: 'Offline', emoji: '👩‍🎨' },
    { name: 'David Beck', role: 'Marketing', status: 'Online', emoji: '🧑‍💼' },
  ];

  return (
    <div className="data-card">
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Team Members</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="avatar" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{member.emoji}</div>
                    <span style={{ fontWeight: '600' }}>{member.name}</span>
                  </div>
                </td>
                <td>{member.role}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: member.status === 'Online' ? '#059669' : '#666' }}></div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{member.status}</span>
                  </div>
                </td>
                <td><button style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
