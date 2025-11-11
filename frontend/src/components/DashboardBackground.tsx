import React from 'react';
import './DashboardBackground.css';

export function DashboardBackground() {
  return (
    <div className="dashboard-background">
      {/* Dynamic Color Orbs */}
      <div className="color-orb orb-1"></div>
      <div className="color-orb orb-2"></div>
      <div className="color-orb orb-3"></div>
      <div className="color-orb orb-4"></div>
      <div className="color-orb orb-5"></div>
      <div className="color-orb orb-6"></div>
      <div className="color-orb orb-7"></div>
      <div className="color-orb orb-8"></div>

      {/* Small Floating Circles */}
      <div className="floating-circles">
        {Array.from({ length: 35 }, (_, i) => (
          <div key={i} className={`floating-circle circle-${i + 1}`}></div>
        ))}
      </div>

      {/* Animated Gradient Waves */}
      <div className="animated-wave wave-1"></div>
      <div className="animated-wave wave-2"></div>
      <div className="animated-wave wave-3"></div>
      <div className="animated-wave wave-4"></div>

      {/* Flowing Light Streams */}
      <div className="light-stream stream-1"></div>
      <div className="light-stream stream-2"></div>
      <div className="light-stream stream-3"></div>
      <div className="light-stream stream-4"></div>

      {/* Rotating Elements */}
      <div className="rotating-element element-1"></div>
      <div className="rotating-element element-2"></div>
      <div className="rotating-element element-3"></div>

      {/* Pulsing Dots */}
      <div className="pulsing-dots">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className={`pulsing-dot dot-${i + 1}`}></div>
        ))}
      </div>

      {/* Dynamic Mesh Background */}
      <div className="dynamic-mesh"></div>
      
      {/* Color Shifting Overlay */}
      <div className="color-shift-overlay"></div>
      
      {/* Additional Vibrant Elements */}
      <div className="rainbow-spots">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className={`rainbow-spot spot-${i + 1}`}></div>
        ))}
      </div>
      
      {/* Colorful Streaks */}
      <div className="color-streaks">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className={`color-streak streak-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}