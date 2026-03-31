"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeToggle from '../../components/ThemeToggle';

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [userName, setUserName] = useState('Alex');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('userName');
    router.push('/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: '📊', path: '/dashboard' },
    { name: 'Projects', icon: '📁', path: '/dashboard/projects' },
    { name: 'Analytics', icon: '📈', path: '/dashboard/analytics' },
    { name: 'Team', icon: '👥', path: '/dashboard/team' },
    { name: 'Notifications', icon: '🔔', path: '/dashboard/notifications' },
    { name: 'Messages', icon: '💬', path: '/dashboard/messages' },
    { name: 'Billing', icon: '💳', path: '/dashboard/billing' },
    { name: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
  ];

  return (
    <div className="dashboard-container">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          {!isCollapsed && (
            <Link href="/dashboard" className="logo">
              <span style={{ color: "var(--primary)" }}>Code</span>Wave
            </Link>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{ fontSize: '1.25rem', opacity: 0.5 }}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div style={{ padding: '1rem', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--border-color)' }}>
          <Link href="/" className="nav-item">
            <span style={{ fontSize: '1.25rem' }}>🌐</span>
            {!isCollapsed && <span>Back to Website</span>}
          </Link>
          <button onClick={handleLogout} className="nav-item" style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.25rem' }}>🚪</span>
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Good morning, {userName}</h1>
            <p style={{ fontSize: '0.95rem' }}>Here's what's happening with your projects today.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeToggle />
            <div className="avatar" style={{ width: '40px', height: '40px' }}></div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
