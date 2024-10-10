import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';  // CSS dosyasını dahil ediyoruz

const Register = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/users/register', {
        username,
        email,
        password,
      });
      
      // Başarılı kayıt işlemi, kullanıcıyı kaydet
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data); // Kullanıcıyı set et
      setMessage('Kayıt başarılı!');
    } catch (error) {
      // Backend'den gelen hatayı doğru bir şekilde yakala
      setMessage(`Kayıt başarısız: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Kayıt Ol</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Kullanıcı Adı:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>E-posta:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Şifre:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">Kayıt Ol</button>
        </form>
        {message && <p className="register-message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
