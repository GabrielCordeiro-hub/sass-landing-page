"use client";
import React from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle Dark Mode"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        fontSize: '1.25rem',
        cursor: 'pointer',
        transition: 'var(--transition)',
        color: 'var(--primary)'
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
