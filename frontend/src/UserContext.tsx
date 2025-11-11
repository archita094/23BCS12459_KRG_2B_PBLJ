import React, { createContext, useState, useEffect } from "react";

interface Message {
  id: string;
  type: "user" | "bot" | "error";
  content: string;
  timestamp: Date;
}

interface User {
  id: string;
  username: string;
  moodAvg?: number;
  totalActiveDays?: number;
  sessionCount?: number;
  streak?: number;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  hasSelectedMood: boolean;
  setHasSelectedMood: (value: boolean) => void;
  chatHistory: Message[];
  setChatHistory: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  hasSelectedMood: false,
  setHasSelectedMood: () => {},
  chatHistory: [],
  setChatHistory: () => {}
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [hasSelectedMood, setHasSelectedMoodState] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const getToday = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    const storedDate = localStorage.getItem("moodCheckInDate");
    if (storedDate === getToday()) {
      setHasSelectedMoodState(true);
    } else {
      setHasSelectedMoodState(false);
    }
  }, []);

  const setHasSelectedMood = (value: boolean) => {
    setHasSelectedMoodState(value);
    if (value) {
      localStorage.setItem("moodCheckInDate", getToday());
    } else {
      localStorage.removeItem("moodCheckInDate");
    }
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, hasSelectedMood, setHasSelectedMood, chatHistory, setChatHistory }}
    >
      {children}
    </UserContext.Provider>
  );
};
