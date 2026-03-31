"use client";
import React from 'react';

export default function SettingsPage() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Settings</h2>
      <div className="data-card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Profile Information</h3>
        <div className="auth-form" style={{ maxWidth: '100%' }}>
          <div className="form-group">
            <label>Display Name</label>
            <input type="text" className="form-input" defaultValue="Alex Johnson" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-input" defaultValue="alex@codewave.com" />
          </div>
          <button className="btn-primary" style={{ width: 'fit-content', padding: '0.75rem 2rem' }}>Save Changes</button>
        </div>
      </div>
      <div className="data-card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Security</h3>
        <button className="btn-secondary" style={{ borderRadius: '10px' }}>Change Password</button>
      </div>
    </div>
  );
}
