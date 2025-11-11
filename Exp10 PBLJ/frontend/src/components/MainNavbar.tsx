import React from 'react';
import './MainNavbar.css';
import logoImage from "figma:asset/b67ae330647ce5de434c88aa9f55b480793d2deb.png";

interface MainNavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  user: any;
  onLogout: () => void;
}

export function MainNavbar({ activeTab, onTabChange, user, onLogout }: MainNavbarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'booking', label: 'Therapists', icon: '👥' },
    { id: 'meditation', label: 'Meditation', icon: '🧘' },
    { id: 'peer', label: 'Community', icon: '💬' },
    { id: 'hub', label: 'Resources', icon: '📚' }
  ];

  return (
    <nav className="main-navbar">
      <div className="navbar-brand">
        <div className="brand-logo">
          <img 
            src={logoImage} 
            alt="MannMitra Logo" 
            className="logo-image"
          />
          <div className="brand-text">
            <h2>MANNMITRA</h2>
            <span className="brand-subtitle">✨ Your Mental Health Companion</span>
          </div>
        </div>
      </div>

      <div className="navbar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="navbar-user">
        <div className="user-info">
          <div className="user-avatar">{user?.name?.charAt(0)?.toUpperCase()}</div>
          <div className="user-details">
            <div className="user-name">{user?.name}</div>
            <div className="user-status">Online</div>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout} title="Logout">
          🚪
        </button>
      </div>
    </nav>
  );
}