import React, { useState, useEffect, useRef } from 'react';

export function Meditation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSession, setCurrentSession] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const audioObjRef = useRef<{
    audioContext: AudioContext;
    oscillator: OscillatorNode;
    modulator: OscillatorNode;
    modGain: GainNode;
  } | null>(null);

  const meditationSessions = [
    { id: 1, title: 'Morning Mindfulness', duration: '10 min', durationSeconds: 600, type: 'Mindfulness', difficulty: 'Beginner', description: 'Start your day with clarity and intention', icon: '🌅', color: '#fbbf24' },
    { id: 2, title: 'Anxiety Relief', duration: '15 min', durationSeconds: 900, type: 'Anxiety', difficulty: 'Beginner', description: 'Calm your mind and reduce anxious thoughts', icon: '🌊', color: '#06b6d4' },
    { id: 3, title: 'Deep Sleep', duration: '20 min', durationSeconds: 1200, type: 'Sleep', difficulty: 'All Levels', description: 'Prepare your mind and body for restful sleep', icon: '🌙', color: '#8b5cf6' },
    { id: 4, title: 'Stress Release', duration: '12 min', durationSeconds: 720, type: 'Stress', difficulty: 'Intermediate', description: 'Release tension and find inner peace', icon: '🍃', color: '#10b981' },
    { id: 5, title: 'Focus & Concentration', duration: '8 min', durationSeconds: 480, type: 'Focus', difficulty: 'Beginner', description: 'Enhance your ability to concentrate', icon: '🎯', color: '#f59e0b' },
    { id: 6, title: 'Body Scan', duration: '25 min', durationSeconds: 1500, type: 'Body Awareness', difficulty: 'Intermediate', description: 'Connect with your body through mindful awareness', icon: '🧘‍♀️', color: '#ec4899' },
    { id: 7, title: 'Loving Kindness', duration: '18 min', durationSeconds: 1080, type: 'Compassion', difficulty: 'All Levels', description: 'Cultivate love and compassion for yourself and others', icon: '💝', color: '#ef4444' },
    { id: 8, title: 'Walking Meditation', duration: '30 min', durationSeconds: 1800, type: 'Movement', difficulty: 'Advanced', description: 'Mindful movement and walking practice', icon: '🚶‍♀️', color: '#14b8a6' }
  ];

  const categories = ['All', 'Mindfulness', 'Anxiety', 'Sleep', 'Stress', 'Focus', 'Body Awareness', 'Compassion', 'Movement'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSessions = selectedCategory === 'All' 
    ? meditationSessions 
    : meditationSessions.filter(session => session.type === selectedCategory);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isPlaying && currentSession) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalTime - 1) {
            stopSession();
            return totalTime;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSession, totalTime]);

  const createMeditationAudio = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      const modulator = audioContext.createOscillator();
      const modGain = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);

      modulator.connect(modGain);
      modGain.connect(oscillator.frequency);
      modulator.frequency.setValueAtTime(0.5, audioContext.currentTime);
      modGain.gain.setValueAtTime(10, audioContext.currentTime);

      oscillator.start();
      modulator.start();

      audioObjRef.current = { audioContext, oscillator, modulator, modGain };
    } catch (err) {
      console.log('Web Audio API not supported', err);
    }
  };

  const stopMeditationAudio = () => {
    if (audioObjRef.current) {
      audioObjRef.current.oscillator.stop();
      audioObjRef.current.modulator.stop();
      audioObjRef.current.audioContext.close();
      audioObjRef.current = null;
    }
  };

  const handlePlaySession = (sessionId: number) => {
    if (currentSession === sessionId) {
      setIsPlaying(!isPlaying);
      if (!isPlaying) createMeditationAudio();
      else stopMeditationAudio();
    } else {
      stopMeditationAudio();
      const session = meditationSessions.find(s => s.id === sessionId);
      if (session) {
        setCurrentSession(sessionId);
        setTotalTime(session.durationSeconds);
        setCurrentTime(0);
        setIsPlaying(true);
        createMeditationAudio();
      }
    }
  };

  const stopSession = () => {
    setIsPlaying(false);
    setCurrentSession(null);
    setCurrentTime(0);
    setTotalTime(0);
    stopMeditationAudio();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#10b981';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ef4444';
      default: return '#8b5cf6';
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
       <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#1e293b' }}>Guided Meditations</h1>
<p style={{ color: '#1e293b', fontSize: '1.1rem' }}>
  Find peace and clarity through our curated meditation sessions
</p>
       </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              border: selectedCategory === category ? '2px solid #6366f1' : '1px solid #ccc',
              background: selectedCategory === category ? '#b69affff' : '#fff',
              cursor: 'pointer',
              color:"black",
              fontWeight: 600,
              transition: 'all 0.3s'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Current Session Player */}
      {currentSession && (
        <div style={{ background: '#1c253dff', padding: '1rem', borderRadius: '16px', marginBottom: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem' }}>
              {meditationSessions.find(s => s.id === currentSession)?.icon}
            </div>
            <div>
              <h3 style={{ margin: 0 }}>{meditationSessions.find(s => s.id === currentSession)?.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a9caffff' }}>
  {meditationSessions.find(s => s.id === currentSession)?.description}
</p>

            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <button onClick={() => handlePlaySession(currentSession === 1 ? meditationSessions.length : currentSession - 1)} style={{ padding: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>⏮️</button>
            <button onClick={() => handlePlaySession(currentSession)} style={{ padding: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={stopSession} style={{ padding: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>⏹️</button>
            <button onClick={() => handlePlaySession(currentSession === meditationSessions.length ? 1 : currentSession + 1)} style={{ padding: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>⏭️</button>
          </div>
          <div>
            <div style={{ background: '#e5e7eb', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '0.25rem' }}>
              <div style={{ width: `${totalTime > 0 ? (currentTime / totalTime) * 100 : 0}%`, background: '#6366f1', height: '100%' }}></div>
            </div>
            <span style={{ fontSize: '0.85rem' }}>{formatTime(currentTime)} / {formatTime(totalTime)}</span>
          </div>
        </div>
      )}

      {/* Meditation Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {filteredSessions.map(session => (
          <div key={session.id} style={{
            display: 'flex', flexDirection: 'column', padding: '1rem', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: currentSession === session.id ? `2px solid ${session.color}` : '1px solid #e5e7eb'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{session.icon}</div>
            <h3 style={{ margin: '0 0 0.25rem 0' ,color: '#1e293b'}}>{session.title}</h3>
           <p style={{ fontSize: '0.85rem', color: '#1e293b', marginBottom: '0.5rem' }}>
  {session.description}
</p>

            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span style={{color:"#1e293b"}}>⏱️ {session.duration}</span>
              <span style={{color:"#0084e8ff"}}>{session.type}</span>
              <span style={{ color: getDifficultyColor(session.difficulty), fontWeight: 600 ,}}>{session.difficulty}</span>
            </div>
            <button onClick={() => handlePlaySession(session.id)} style={{
              padding: '0.5rem', borderRadius: '12px', border: 'none', background: session.color, color: '#fff', fontWeight: 600, cursor: 'pointer'
            }}>
              {currentSession === session.id && isPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Meditation Tips for Beginners</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
          {[
            { icon: '🧘‍♀️', title: 'Find Your Posture', text: 'Sit comfortably with your spine straight. You can sit on a chair, cushion, or floor.' },
            { icon: '👁️', title: 'Focus on Breathing', text: "Pay attention to your natural breath. Don't try to change it, just observe." },
            { icon: '🧠', title: 'Notice Wandering Thoughts', text: "It's normal for your mind to wander. Gently bring your attention back to your breath." },
            { icon: '⏰', title: 'Start Small', text: 'Begin with just 5-10 minutes a day. Consistency is more important than duration.' },
          ].map((tip, idx) => (
            <div key={idx} style={{ background: '#fff', borderRadius: '16px', padding: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
              <h4 style={{ margin: '0 0 0.25rem 0' ,color:"#0e16b6ff" }}>{tip.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#334155', margin: 0 }}>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
