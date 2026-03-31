"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('userName', name.trim());
      router.push('/dashboard');
    }
  };

  return (
    <main className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <a href="/" className="logo" style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'inline-block' }}>
            <span style={{ color: "var(--primary)" }}>Code</span>Wave
          </a>
          <h1>Create an account</h1>
          <p>Start your 14-day free trial today.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="form-input" 
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" className="form-input" placeholder="name@company.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-input" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
            Create account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    </main>
  );
}
