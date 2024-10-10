import React, { useState } from 'react';
import './ChatContent.css';

const ChatContent = ({ activeTab }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage(''); // Mesaj gönderildikten sonra input alanını temizle
    }
  };

  return (
    <div className="chat-content">
      <div className="chat-header">
        <h2>{activeTab === 'Chat' ? "Kaan AKSÜT's Workspace" : activeTab}</h2>
      </div>

      <div className="chat-messages">
        {activeTab === 'Replies' && <p>No replies yet.</p>}
        {activeTab === 'Posts' && <p>No posts yet.</p>}
        {activeTab === 'Chat' && (
          <>
            {messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              messages.map((msg, index) => <p key={index}>{msg}</p>)
            )}
            <div className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Write a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatContent;
