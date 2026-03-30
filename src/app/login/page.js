"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('userName', name.trim());
      router.push('/dashboard');
    } else {
      localStorage.setItem('userName', 'User');
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
          <h1>Welcome back</h1>
          <p>Please enter your details to sign in.</p>
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
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
