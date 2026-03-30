"use client";
import React from 'react';

export default function SettingsPage() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Settings</h2>
      <div className="data-card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Profile</h3>
        <button className="btn-primary">Save Changes</button>
      </div>
    </div>
  );
}
