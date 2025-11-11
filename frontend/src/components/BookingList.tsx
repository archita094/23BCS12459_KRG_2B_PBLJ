import React, { useState } from "react";

interface Therapist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  price: string;
  bio: string;
  availability: string[];
  languages: string[];
  image: string; 
}

export function BookingList() {
  const [selectedTherapist, setSelectedTherapist] = useState<number | null>(null);

  const therapists: Therapist[] = [
    {
      id: 1,
      name: "Sarah M.",
      specialty: "Cognitive Behavioral Therapy",
      rating: 4.9,
      experience: "5 yrs",
      price: "$60/session",
      bio: "Experienced therapist helping with anxiety and depression.",
      availability: ["Mon 10am", "Wed 2pm", "Fri 11am"],
      languages: ["English", "Spanish"],
      image: "S",
    },
    {
      id: 2,
      name: "Mike R.",
      specialty: "Mindfulness & Meditation",
      rating: 4.8,
      experience: "7 yrs",
      price: "$55/session",
      bio: "Mindfulness coach specializing in stress relief and mental health.",
      availability: ["Tue 1pm", "Thu 3pm", "Sat 10am"],
      languages: ["English"],
      image: "M",
    },
    {
      id: 3,
      name: "Alex T.",
      specialty: "Trauma Therapy & EMDR",
      rating: 4.7,
      experience: "6 yrs",
      price: "$65/session",
      bio: "Helping clients overcome past trauma with evidence-based methods.",
      availability: ["Mon 11am", "Wed 4pm", "Fri 2pm"],
      languages: ["English", "French"],
      image: "A",
    },
    {
      id: 4,
      name: "Emma L.",
      specialty: "Child & Adolescent Therapy",
      rating: 4.9,
      experience: "8 yrs",
      price: "$70/session",
      bio: "Supporting young clients and families to manage emotional challenges.",
      availability: ["Tue 10am", "Thu 2pm", "Sat 1pm"],
      languages: ["English"],
      image: "E",
    },
  ];

  const handleBookSession = (id: number) => {
window.open("https://powder-north-87769461.figma.site/", "_blank");
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "24px",
          padding: "2.5rem",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
          border: "1px solid rgba(203,213,225,0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            background: "linear-gradient(135deg, #1e293b, #06b6d4, #8b5cf6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.75rem",
            marginBottom: "1rem",
            fontWeight: 800,
          }}
        >
          Book Your Session
        </h1>
        <p style={{ color: "#334155", fontSize: "1.25rem", fontWeight: 500 }}>
          Connect with certified therapists easily and securely.
        </p>
      </div>

      {/* Therapists Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        {therapists.map((therapist) => (
          <div
            key={therapist.id}
            onClick={() =>
              setSelectedTherapist(
                selectedTherapist === therapist.id ? null : therapist.id
              )
            }
            style={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: "18px",
              padding: "1.5rem",
              backdropFilter: "blur(20px)",
              boxShadow:
                selectedTherapist === therapist.id
                  ? "0 20px 40px rgba(139,92,246,0.2), 0 8px 24px rgba(139,92,246,0.1), inset 0 1px 0 rgba(255,255,255,0.9)"
                  : "0 8px 32px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
              border:
                selectedTherapist === therapist.id
                  ? "2px solid #8b5cf6"
                  : "1px solid rgba(203,213,225,0.3)",
              cursor: "pointer",
              transition: "all 0.4s ease",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 8px 25px rgba(6,182,212,0.3)",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                {therapist.image}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    background: "linear-gradient(135deg, #1e293b, #6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "1.1rem",
                    marginBottom: "0.4rem",
                    fontWeight: 700,
                  }}
                >
                  {therapist.name}
                </h3>
                <span
                  style={{
                    color: "#06b6d4",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    background: "rgba(6,182,212,0.1)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                    display: "inline-block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {therapist.specialty}
                </span>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      color: "#f59e0b",
                      background: "rgba(245,158,11,0.1)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "8px",
                    }}
                  >
                    ⭐ {therapist.rating}
                  </span>
                  <span
                    style={{
                      color: "#334155",
                      background: "rgba(100,116,139,0.1)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "8px",
                    }}
                  >
                    {therapist.experience}
                  </span>
                </div>
              </div>
              <div
                style={{
                  color: "#10b981",
                  fontWeight: 700,
                  fontSize: "1rem",
                  background: "rgba(16,185,129,0.1)",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "8px",
                  display: "inline-block",
                  marginTop: "0.3rem",
                }}
              >
                {therapist.price}
              </div>
            </div>

            {/* Bio */}
            <p
              style={{
                color: "#334155",
                lineHeight: 1.6,
                fontSize: "0.9rem",
                fontWeight: 500,
                marginBottom: "1.5rem",
              }}
            >
              {therapist.bio}
            </p>

            {/* Availability */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h4
                style={{
                  background: "linear-gradient(135deg, #1e293b, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "0.95rem",
                  marginBottom: "0.8rem",
                  fontWeight: 700,
                  display: "flex",
                  gap: "0.4rem",
                  alignItems: "center",
                }}
              >
                🗓️ Availability
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {therapist.availability.map((slot, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(6,182,212,0.15)",
                      border: "1px solid rgba(6,182,212,0.3)",
                      borderRadius: "10px",
                      padding: "0.5rem 1rem",
                      fontSize: "0.9rem",
                      color: "#0891b2",
                      fontWeight: 600,
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h4
                style={{
                  background: "linear-gradient(135deg, #1e293b, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "0.95rem",
                  marginBottom: "0.8rem",
                  fontWeight: 700,
                  display: "flex",
                  gap: "0.4rem",
                  alignItems: "center",
                }}
              >
                🌍 Languages
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {therapist.languages.map((lang, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(139,92,246,0.15)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      borderRadius: "10px",
                      padding: "0.5rem 1rem",
                      fontSize: "0.9rem",
                      color: "#7c3aed",
                      fontWeight: 600,
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() => handleBookSession(therapist.id)}
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                  border: "none",
                  borderRadius: "12px",
                  padding: "1rem 1.5rem",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  flex: 1,
                  fontWeight: 700,
                  boxShadow: "0 8px 25px rgba(6,182,212,0.3)",
                }}
              >
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
