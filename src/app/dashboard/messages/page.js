"use client";
import React, { useState } from 'react';

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  const contacts = [
    { id: 1, name: 'Sarah Connor', avatar: '👩‍💻', lastMsg: 'The server deployment is done!', time: '10:45 AM', active: true },
    { id: 2, name: 'David Beck', avatar: '🧑‍💼', lastMsg: 'Did you see the latest report?', time: 'Yesterday', active: false },
    { id: 3, name: 'Maria Garcia', avatar: '👩‍🎨', lastMsg: 'The new designs are ready.', time: 'Mar 10', active: false },
    { id: 4, name: 'Alex Johnson', avatar: '🧑‍💻', lastMsg: 'Meeting at 3 PM today.', time: 'Mar 09', active: false },
  ];

  const currentMessages = [
    { id: 1, sender: 'Sarah Connor', text: 'Hey there! Is the new feature ready?', time: '10:30 AM', mine: false },
    { id: 2, sender: 'Me', text: 'Almost! Just finishing some tests.', time: '10:35 AM', mine: true },
    { id: 3, sender: 'Sarah Connor', text: 'Great! The server deployment is done!', time: '10:45 AM', mine: false },
  ];

  return (
    <div style={{ height: 'calc(100vh - 200px)', display: 'flex', gap: '1.5rem' }}>
      <div className="data-card" style={{ width: '350px', padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Messages</h2>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              onClick={() => setActiveChat(contact.id)}
              style={{ 
                padding: '1.25rem 1.5rem', 
                cursor: 'pointer', 
                background: activeChat === contact.id ? 'var(--bg-secondary)' : 'transparent',
                borderLeft: activeChat === contact.id ? '4px solid var(--primary)' : '4px solid transparent',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="avatar" style={{ minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {contact.avatar}
                </div>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: '600' }}>{contact.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{contact.time}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {contact.lastMsg}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="data-card" style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="avatar" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             {contacts.find(c => c.id === activeChat)?.avatar}
          </div>
          <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>{contacts.find(c => c.id === activeChat)?.name}</h3>
        </div>
        <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {currentMessages.map((msg) => (
            <div key={msg.id} style={{ 
              alignSelf: msg.mine ? 'flex-end' : 'flex-start',
              maxWidth: '70%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.mine ? 'flex-end' : 'flex-start'
            }}>
              <div style={{ 
                padding: '0.85rem 1.25rem', 
                borderRadius: msg.mine ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                background: msg.mine ? 'var(--primary)' : '#F2F4F7',
                color: msg.mine ? 'white' : 'var(--text-main)',
                fontSize: '0.95rem'
              }}>
                {msg.text}
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{msg.time}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <form style={{ display: 'flex', gap: '1rem' }}>
            <input type="text" className="form-input" placeholder="Type your message..." style={{ flex: 1 }} />
            <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '12px' }}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
