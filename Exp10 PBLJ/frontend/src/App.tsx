import React, { useState, useContext } from "react";
import { UserProvider, UserContext } from "./UserContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Resources } from "./components/Resources";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { MainNavbar } from "./components/MainNavbar";
import { Dashboard } from "./components/Dashboard";
import { BookingList } from "./components/BookingList";
import { Meditation } from "./components/Meditation";
import { ChatBot } from "./components/ChatBot";
import { PeerPage } from "./components/PeerPage";
import { Hub } from "./components/Hub";
import { DashboardBackground } from "./components/DashboardBackground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/dashboard.css";
import "./styles/globals.css";

function AppContent() {
  const { user, setUser } = useContext(UserContext); // ✅ read from context
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const isLoggedIn = !!user; // ✅ logged in if context has user

  const handleLogout = () => {
    setUser(null); // clear context
    setActiveTab("dashboard");
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard user={user} />;
      case "booking":
        return <BookingList />;
      case "meditation":
        return <Meditation />;
      case "chat":
        return <ChatBot user={user} />;
      case "peer":
        return <PeerPage />;
      case "hub":
        return <Hub />;
      default:
        return <Dashboard user={user} />;
    }
  };

  if (isLoggedIn) {
    return (
      <div
        className="app-dashboard"
        style={{
          backgroundColor: "black",
          margin: 0,
          padding: 0,
          width: "100vw",
          minHeight: "100vh"
        }}
      >
        <DashboardBackground />
        <MainNavbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          user={user}
          onLogout={handleLogout}
        />
        <main className="dashboard-main" style={{ width: "100%", margin: 0, padding: 0 }}>
          {renderMainContent()}
        </main>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(135deg, #0f1419 0%, #1e3a4e 20%, #2563eb 40%, #06b6d4 60%, #0891b2 80%, #0f172a 100%)",
        margin: 0,
        padding: 0,
        width: "100vw",
      }}
    >
      <div className="main-pg">
        <Header />
        <Hero onLoginClick={() => setShowLoginModal(true)} />
        <Services />
        <About />
        <Resources />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
