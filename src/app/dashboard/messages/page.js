"use client";
import React, { useState } from 'react';

export default function MessagesPage() {
  const contacts = [
    { id: 1, name: 'Sarah Connor', avatar: '👩‍💻', lastMsg: 'The server deployment is done!', time: '10:45 AM', active: true },
    { id: 2, name: 'David Beck', avatar: '🧑‍💼', lastMsg: 'Did you see the latest report?', time: 'Yesterday', active: false },
    { id: 3, name: 'Maria Garcia', avatar: '👩‍🎨', lastMsg: 'The new designs are ready.', time: 'Mar 10', active: false },
    { id: 4, name: 'Alex Johnson', avatar: '🧑‍💻', lastMsg: 'Meeting at 3 PM today.', time: 'Mar 09', active: false },
  ];

  return (
    <div style={{ height: 'calc(100vh - 200px)', display: 'flex', gap: '1.5rem' }}>
      <div className="data-card" style={{ width: '350px', padding: '0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Messages</h2>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {contacts.map((contact) => (
            <div key={contact.id} style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="avatar" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{contact.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '600' }}>{contact.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{contact.time}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{contact.lastMsg}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
