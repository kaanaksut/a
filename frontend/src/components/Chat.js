import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [activeTab, setActiveTab] = useState('Replies');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="sidebar">
        {['Replies', 'Posts', 'FollowUps', 'Activity', 'Drafts & Sent'].map((tab) => (
          <div
            key={tab}
            className={`sidebar-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="chat-main">
        <div className="chat-header">
          <h2>Kaan AKSU's Workspace</h2>
          <div className="chat-header-icons">
            <span title="Settings">⚙️</span>
            <span title="Info">ℹ️</span>
          </div>
        </div>
        <div className="chat-body">
          {messages.length === 0 ? (
            <div className="empty-chat">
              <p>Inbox Zero</p>
              <p>Congratulations! You've read all your important messages.</p>
              <button className="btn">Got it</button>
            </div>
          ) : (
            messages.map((msg, index) => <div key={index} className="chat-message">{msg}</div>)
          )}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            placeholder="Write here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
