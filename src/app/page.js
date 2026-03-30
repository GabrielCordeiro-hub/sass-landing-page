import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main>
      {/* Header */}
      <nav className="header">
        <div className="container header-content">
          <Link href="/" className="logo">
            <span style={{ color: "var(--primary)" }}>Code</span>Wave
          </Link>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ThemeToggle />
            <a href="/login" style={{ fontWeight: '600', fontSize: '0.95rem' }}>Login</a>
            <a href="/signup" className="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Scale your SaaS faster than ever before</h1>
            <p>CodeWave provides the ultimate infrastructure for modern software companies. Automate your growth, secure your data, and delight your users.</p>
            <div className="hero-ctas">
              <Link href="/signup">
                <button className="btn-primary">Start Free Trial</button>
              </Link>
              <button className="btn-secondary">Watch Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div style={{ padding: "40px", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "15%", display: "flex", gap: "20px", marginBottom: "30px" }}>
                  <div style={{ flex: 1, background: "#fff5ed", borderRadius: "12px", border: "1px solid #FFE8D6" }}></div>
                  <div style={{ flex: 1, background: "#f8f8f8", borderRadius: "12px" }}></div>
                  <div style={{ flex: 1, background: "#f8f8f8", borderRadius: "12px" }}></div>
                </div>
                <div style={{ flex: 1, background: "#fafafa", borderRadius: "20px", display: "flex", padding: "20px", gap: "20px" }}>
                   <div style={{ width: "25%", background: "#fff", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}></div>
                   <div style={{ flex: 1, background: "#fff", borderRadius: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <h2 className="section-title">Everything you need to succeed</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Ultra-Fast Performance</h3>
              <p>Optimized at every level to ensure your application runs at peak efficiency, no matter the load.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Enterprise Security</h3>
              <p>Advanced threat detection, end-to-end encryption, and multi-factor authentication built-in.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Insightful Analytics</h3>
              <p>Understand your performance with deep-dive reports and AI-generated business insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Global Infrastructure</h3>
              <p>Deploy to hundreds of global edge locations with a single click and zero configuration.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="logo" style={{ color: "var(--primary)", fontSize: "2rem", marginBottom: "1.5rem" }}>CodeWave</div>
              <p>The premium choice for SaaS workflow automation and global scaling.</p>
            </div>
            <div className="footer-links">
              <h3>Product</h3>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div className="footer-links">
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-links">
               <h3>Support</h3>
               <a href="#">Help Center</a>
               <a href="#">Documentation</a>
               <a href="#">Status</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 CodeWave Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
