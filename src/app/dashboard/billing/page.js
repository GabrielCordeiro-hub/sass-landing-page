"use client";
import React from 'react';

export default function BillingPage() {
  const history = [
    { date: 'Mar 01, 2026', amount: '$29.00', status: 'Paid', method: 'Visa •••• 4242' },
    { date: 'Feb 01, 2026', amount: '$29.00', status: 'Paid', method: 'Visa •••• 4242' },
    { date: 'Jan 01, 2026', amount: '$29.00', status: 'Paid', method: 'Visa •••• 4242' },
  ];

  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Billing & Subscription</h2>
      <div className="stats-grid">
        <div className="stat-card" style={{ border: '2px solid var(--primary)', background: 'var(--bg-secondary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="badge badge-success" style={{ background: 'var(--primary)', color: 'white' }}>CURRENT PLAN</span>
            <span style={{ fontSize: '1.25rem' }}>⭐</span>
          </div>
          <div className="stat-label">Monthly Subscription</div>
          <div className="stat-value">Pro Plan</div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            $29.00 / month • Renewals on Apr 01
          </div>
        </div>
        <div className="stat-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="badge badge-pending">PAYMENT METHOD</span>
            <span style={{ fontSize: '1.25rem' }}>💳</span>
          </div>
          <div className="stat-label">Default Method</div>
          <div className="stat-value">Visa •••• 4242</div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' }}>
            Edit Method
          </div>
        </div>
      </div>
      <div className="data-card" style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Billing History</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Method</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: '500' }}>{item.date}</td>
                  <td>{item.amount}</td>
                  <td><span className="badge badge-success">{item.status}</span></td>
                  <td style={{ color: 'var(--text-muted)' }}>{item.method}</td>
                  <td><button style={{ color: 'var(--primary)', fontWeight: '600' }}>Download</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
