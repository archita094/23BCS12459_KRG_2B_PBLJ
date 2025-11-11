import React, { useState, useContext } from "react";
import "./Dashboard.css";
import { UserContext } from "../UserContext";

export function Dashboard() {
  const { user, setUser, hasSelectedMood, setHasSelectedMood } =
    useContext(UserContext);
  const [selectedMood, setSelectedMood] = useState("");
  const [loadingMood, setLoadingMood] = useState(false);

  const moods = [
    { emoji: "😊", label: "Great", value: 5, color: "#10b981" },
    { emoji: "🙂", label: "Good", value: 4, color: "#06b6d4" },
    { emoji: "😐", label: "Okay", value: 3, color: "#f59e0b" },
    { emoji: "😔", label: "Low", value: 2, color: "#f97316" },
    { emoji: "😰", label: "Anxious", value: 1, color: "#ef4444" },
  ];

  const goals = [
    {
      icon: "🎥",
      title: "Inspire Me",
      description: "Watch motivational videos & talks",
      link: "https://www.youtube.com/results?search_query=motivational+talks",
    },
    {
      icon: "🎧",
      title: "Podcasts",
      description: "Listen to ideas and stories on Spotify",
      link: "https://open.spotify.com/genre/podcasts-page",
    },
    {
      icon: "👥",
      title: "Communities",
      description: "Join uplifting Reddit communities",
      link: "https://www.reddit.com/r/GetMotivated/",
    },
    {
      icon: "📝",
      title: "Notes",
      description: "Organize your thoughts in Notion",
      link: "https://www.notion.so/",
    },
  ];

  const quickStats = [
    { label: "Days Active", value: user?.totalActiveDays || 0, trend: "+0" },
    { label: "Sessions", value: user?.sessionCount || 0, trend: "+0" },
    { label: "Streak", value: user?.streak || 0, trend: "+0" },
    {
      label: "Mood Score",
      value: user?.moodAvg?.toFixed(1) || "0",
      trend: "+0",
    },
  ];

  // Handle mood selection
  const handleMoodSelect = async (mood) => {
    if (!user || hasSelectedMood) return;
    setSelectedMood(mood.label);
    setHasSelectedMood(true);
    setLoadingMood(true);

    try {
      const response = await fetch("http://localhost:5000/api/user/moodavg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          moodValue: mood.value,
        }),
      });

      const data = await response.json();

      if (response.ok && data.flag === "true") {
        setUser({
          ...user,
          moodAvg: data.moodAvg,
        });
      } else {
        console.error(data.message || "Failed to update mood");
      }
    } catch (error) {
      console.error("Error sending mood:", error);
    } finally {
      setLoadingMood(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <div className="welcome-section">
            <h1>
              Good{" "}
              {new Date().getHours() < 12
                ? "morning"
                : new Date().getHours() < 18
                ? "afternoon"
                : "evening"}
              , {user?.username}!
            </h1>
            <p style={{ color: "#c4c4c4" }}>
              How are you feeling today? Let's continue your wellness journey.
            </p>
          </div>
          <div className="header-stats">
            {quickStats.map((stat, index) => (
              <div key={index} className="mini-stat">
                <span className="stat-icon">
                  {stat.label === "Days Active"
                    ? "📅"
                    : stat.label === "Sessions"
                    ? "💻"
                    : stat.label === "Streak"
                    ? "🔥"
                    : "⭐"}
                </span>
                <div>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Mood Check-in */}
        <div className="dashboard-card mood-card">
          <h3>How are you feeling?</h3>
          <div className="mood-selector">
            {moods.map((mood, index) => (
              <button
                key={index}
                className={`mood-option ${
                  selectedMood === mood.label ? "selected" : ""
                }`}
                onClick={() => handleMoodSelect(mood)}
                style={{ "--accent-color": mood.color }}
                disabled={loadingMood || hasSelectedMood}
              >
                <span className="mood-emoji">{mood.emoji}</span>
                <span className="mood-label">{mood.label}</span>
              </button>
            ))}
          </div>
          {hasSelectedMood && (
            <div className="mood-feedback">
              <p style={{ color: "#c4c4c4" }}>
                Thanks for sharing! Come back tomorrow to check in again.
              </p>
            </div>
          )}
        </div>

        {/* Goals with external links */}
        <div className="dashboard-card goals-card">
          <h3>What would you like to focus on today?</h3>
          <div className="goals-grid">
            {goals.map((goal, index) => (
              <a
                key={index}
                href={goal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="goal-option"
              >
                <span className="goal-icon">{goal.icon}</span>
                <div className="goal-content">
                  <div className="goal-title">{goal.title}</div>
                  <div className="goal-description">{goal.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
