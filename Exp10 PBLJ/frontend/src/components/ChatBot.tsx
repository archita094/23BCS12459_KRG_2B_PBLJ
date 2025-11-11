import React, { useState, useRef, useEffect, useContext } from "react";
import { Button } from "./ui/button";
import { Send, Bot, User, Loader2, Heart, Brain, Sparkles, AlertTriangle } from "lucide-react";
import "./ChatBot.css";
import { UserContext } from "../UserContext";
import ReactMarkdown from "react-markdown";


interface Message {
  id: string;
  type: "user" | "bot" | "error";
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  user: any;
}

export function ChatBot({ user }: ChatBotProps) {
  const { chatHistory, setChatHistory } = useContext(UserContext);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickResponses, setShowQuickResponses] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      type: "user",
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setChatHistory((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user?.id,
          prompt: userMessage.content,
          mode: "normal"
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const botResponse: Message = {
          id: Date.now().toString() + "-bot",
          type: "bot",
          content: data.data.response,
          timestamp: new Date()
        };
        setChatHistory((prev) => [...prev, botResponse]);
      } else {
        const errorResponse: Message = {
          id: Date.now().toString() + "-error",
          type: "error",
          content: data.message || "Something went wrong.",
          timestamp: new Date()
        };
        setChatHistory((prev) => [...prev, errorResponse]);
      }
    } catch (error) {
      const errorResponse: Message = {
        id: Date.now().toString() + "-error",
        type: "error",
        content: "Network error. Please try again later.",
        timestamp: new Date()
      };
      setChatHistory((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
    if (e.key === "Escape") {
      setInputMessage("");
      e.preventDefault();
    }
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
    setShowQuickResponses(false);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(response.length, response.length);
      }
    }, 0);
  };

  const quickResponses = [
    "I'm feeling anxious",
    "I had a good day",
    "I'm feeling overwhelmed",
    "I need some encouragement",
    "Help me with sleep tips",
    "I'm feeling lonely"
  ];

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <div className="header-content">
          <div className="bot-info">
            <div className="bot-avatar">
              <Brain className="bot-icon" />
              <div className="pulse-ring"></div>
            </div>
            <div className="bot-details">
              <h1>AI Mental Health Companion</h1>
              <p>Your supportive AI assistant for mental wellness guidance</p>
            </div>
          </div>
          <div className="status-indicator">
            <div className="online-dot"></div>
            <span>Online & Ready to Help</span>
          </div>
        </div>
      </div>

      <div className="chat-container">
        <div className="messages-area">
          {chatHistory.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-avatar">
                {message.type === "bot" ? (
                  <Bot className="avatar-icon bot-avatar-icon" />
                ) : message.type === "error" ? (
                  <AlertTriangle className="avatar-icon error-avatar-icon" />
                ) : (
                  <User className="avatar-icon user-avatar-icon" />
                )}
              </div>
              <div className="message-content">
                <div className="message-bubble">  <ReactMarkdown>{message.content}</ReactMarkdown></div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot typing-message">
              <div className="message-avatar">
                <Bot className="avatar-icon bot-avatar-icon" />
              </div>
              <div className="message-content">
                <div className="message-bubble typing-bubble">
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {showQuickResponses && (
          <div className="quick-responses">
            <div className="quick-responses-label">
              <Sparkles className="sparkles-icon" />
              Quick responses:
            </div>
            <div className="quick-responses-grid">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  className="quick-response-btn"
                  onClick={() => handleQuickResponse(response)}
                >
                  {response}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="input-area">
          <div className="input-container">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Share what's on your mind..."
              className="message-input"
              disabled={isTyping}
              autoComplete="off"
              autoFocus
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="send-button"
            >
              {isTyping ? (
                <Loader2 className="send-icon spinning" />
              ) : (
                <Send className="send-icon" />
              )}
            </Button>
          </div>
          <div className="input-footer">
            <Heart className="heart-icon" />
            <span>
              Remember: This AI provides support but isn't a replacement for professional therapy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}