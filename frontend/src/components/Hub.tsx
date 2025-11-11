import React, { useState } from 'react';
import './Hub.css';

export function Hub() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videoCategories = ['All', 'Anxiety', 'Depression', 'Mindfulness', 'Sleep', 'Stress', 'Relationships', 'Self-Care'];

  const videos = [
    { id: '16EoZOsCJgs', title: 'Anxiety Explained - SEL Sketches', description: 'Anxiety is a BIG feeling with so many others wrapped up inside! This video helps normalize anxiety and explain where it comes from.', expert: 'SEL Sketches', views: '45.2K', category: 'Anxiety' },
    { id: 'FGO8IWiusJo', title: 'Guided Morning Meditation | 10 Minutes', description: 'Start your day with clarity and intention through this 10-minute guided meditation.', expert: 'Boho Beautiful', views: '78.9K', category: 'Mindfulness' },
    { id: 'WMfWqU6T3SI', title: 'Overcoming Depression: Small Steps', description: 'Practical strategies for managing depression and building resilience.', expert: 'Dr. Michael Rodriguez', views: '32.1K', category: 'Depression' },
    { id: 'Luq5VA8SY2E', title: 'Sleep Hygiene for Better Mental Health', description: 'Tips for improving sleep quality and mental well-being.', expert: 'Dr. Emily Watson', views: '56.7K', category: 'Sleep' },
    { id: '0fL-pn80s-c', title: 'Stress Management Techniques That Work', description: 'Evidence-based methods to reduce stress and increase resilience.', expert: 'Dr. James Park', views: '89.3K', category: 'Stress' },
    { id: 'ELLaMPiPqPM', title: 'Building Healthy Relationships', description: 'Communication skills and boundaries for healthier connections.', expert: 'Dr. Maria Santos', views: '41.5K', category: 'Relationships' },
    { id: 'GQe4SkQbF8E', title: 'Self-Care Isn\'t Selfish', description: 'Learn why self-care is essential and how to create sustainable routines.', expert: 'Rachel Green, LCSW', views: '67.8K', category: 'Self-Care' },
    { id: '8vkYJf8DOsc', title: 'Breathing Exercises for Panic Attacks', description: 'Quick and effective breathing techniques to manage panic attacks.', expert: 'Dr. David Kim', views: '123.4K', category: 'Anxiety' }
  ];

  const filteredVideos = selectedCategory === 'All' ? videos : videos.filter(video => video.category === selectedCategory);

  const articles = [
    {
      id: 1,
      title: 'What is the Science of Meditation?',
      readTime: '15 min',
      author: 'Isa Acebal',
      url: 'https://www.skepticspath.org/blog/what-is-the-science-of-meditation/'
    },
    {
      id: 2,
      title: 'When to Seek Help: 5 Warning Signs You Might Need a Therapist',
      readTime: '10 min',
      author: 'Isa Acebal',
      url: 'https://nvelup.care/when-to-seek-help-5-warning-signs-you-might-need-a-therapist/'
    },
    {
      id: 3,
      title: '10 Tips to Overcome Your Work Worries',
      readTime: '10 min',
      author: 'Whitney Vige',
      url: 'https://asana.com/resources/work-anxiety'
    }
  ];

  return (
    <div className="hub">
      <div className="hub-header">
        <h1>Mental Health Resources Hub</h1>
        <p>Educational content, tools, and resources to support your mental wellness journey</p>
      </div>

      {/* Featured Video */}
      <div className="featured-section">
        <h2>Featured This Week</h2>
        <div className="featured-video">
          <div className="featured-thumbnail">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title={videos[0].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="featured-content">
            <h3>{videos[0].title}</h3>
            <p className="featured-description">{videos[0].description}</p>
            <div className="featured-meta">
              <span className="expert">{videos[0].expert}</span>
              <span className="category-tag">{videos[0].category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Library */}
      <div className="video-section">
        <div className="section-header">
          <h2>Video Library</h2>
          <div className="category-filter">
            {videoCategories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="videos-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p className="video-description">{video.description}</p>
                <div className="video-meta">
                  <span className="expert">{video.expert}</span>
                  <span className="views">{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="articles-section">
        <h2>Latest Articles</h2>
        <div className="articles-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              <div className="article-content">
                <h4>{article.title}</h4>
                <div className="article-meta">
                  <span className="author">{article.author}</span>
                  <span className="read-time">{article.readTime}</span>
                </div>
              </div>
              <button className="read-btn" onClick={() => window.open(article.url, '_blank')}>
                Read Article
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Crisis Resources */}
<div className="crisis-section">
  <h2 style={{color:"red"}}>Crisis Support</h2>
  <p>Immediate help when you need it most</p>
  <div className="crisis-info">
    <div className="crisis-item">
      <h3 style={{color:"black"}}>National Suicide Prevention Lifeline</h3>
      <p>📞 988</p>
      <p>24/7 free and confidential support</p>
    </div>
    <div className="crisis-item">
      <h3 style={{color:"black"}}>Crisis Text Line</h3>
      <p>💬 Text HOME to 741741</p>
      <p>Free, 24/7 crisis support via text</p>
    </div>
    <div className="crisis-item">
      <h3 style={{color:"black"}}>SAMHSA National Helpline</h3>
      <p>📞 1-800-662-4357</p>
      <p>Mental health and substance abuse help</p>
    </div>
    <div className="crisis-item emergency-note">
      <p>If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room.</p>
    </div>
  </div>
</div>

    </div>
  );
}
