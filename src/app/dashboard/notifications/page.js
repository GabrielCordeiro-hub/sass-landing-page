"use client";
import React from 'react';

export default function NotificationsPage() {
  const notifications = [
    { id: 1, title: 'New user registered', desc: 'A new user from New York just joined the platform.', time: '5 mins ago', icon: '👤', unread: true },
    { id: 2, title: 'Project deployment completed', desc: 'The "Mobile App" project was successfully deployed to production.', time: '2 hours ago', icon: '🚀', unread: false },
    { id: 3, title: 'Security update available', desc: 'Our system has detected a minor update for your security protocols.', time: '5 hours ago', icon: '🛡️', unread: true },
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem' }}>Notifications</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notifications.map((notif) => (
          <div key={notif.id} className="data-card" style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem' }}>{notif.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '600' }}>{notif.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{notif.time}</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
