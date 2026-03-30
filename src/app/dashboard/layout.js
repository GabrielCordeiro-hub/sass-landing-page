"use client";
import React from 'react';
import ThemeToggle from '../../components/ThemeToggle';

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <main className="main-content">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <ThemeToggle />
        </header>
        {children}
      </main>
    </div>
  );
}
