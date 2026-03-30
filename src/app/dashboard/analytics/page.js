"use client";
import React from 'react';

export default function AnalyticsPage() {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Analytics Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">User Growth</div>
          <div className="stat-value">+24%</div>
          <div style={{ height: '60px', background: 'linear-gradient(90deg, #FF6B0022 0%, #FF6B0088 100%)', marginTop: '1rem', borderRadius: '8px' }}></div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Revenue</div>
          <div className="stat-value">$12.4k</div>
          <div style={{ height: '60px', background: 'linear-gradient(90deg, #05966922 0%, #05966988 100%)', marginTop: '1rem', borderRadius: '8px' }}></div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Conversion Rate</div>
          <div className="stat-value">3.2%</div>
          <div style={{ height: '60px', background: 'linear-gradient(90deg, #3B82F622 0%, #3B82F688 100%)', marginTop: '1rem', borderRadius: '8px' }}></div>
        </div>
      </div>

      <div className="data-card" style={{ marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>Activity Trend</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1rem', alignItems: 'flex-end', height: '240px' }}>
          {[
            { day: 'Mon', height: 40 },
            { day: 'Tue', height: 70 },
            { day: 'Wed', height: 45 },
            { day: 'Thu', height: 90 },
            { day: 'Fri', height: 65 },
            { day: 'Sat', height: 80 },
            { day: 'Sun', height: 55 },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', height: '100%', justifyContent: 'flex-end' }}>
              <div 
                style={{ 
                  height: `${item.height}%`, 
                  width: '100%', 
                  background: 'var(--primary)', 
                  borderRadius: '8px 8px 0 0',
                  opacity: 0.7 + (i * 0.05),
                  transition: 'var(--transition)',
                }}
              ></div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500' }}>{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
