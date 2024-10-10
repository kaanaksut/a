import React, { useState } from 'react';
import axios from 'axios'; // Backend'e istek yapmak için axios kullanıyoruz
import './Auth.css';

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Hataları tutmak için bir state ekledik
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(''); // Hataları sıfırla
    setLoading(true); // Yükleme durumunu başlat
    
    // Form doğrulaması (boş alan kontrolü ve geçerli email kontrolü)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      setError('Email ve şifre girilmelidir.');
      setLoading(false);
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Geçerli bir email girin.');
      setLoading(false);
      return;
    }

    try {
      // Backend'e giriş isteği gönderelim
      const { data } = await axios.post(
        'http://localhost:5000/api/users/login',
        { email, password }
      );
      
      // Başarılı olursa, kullanıcıyı localStorage'a kaydet ve ana sayfaya yönlendir
      localStorage.setItem('userInfo', JSON.stringify(data));
      setUser(data);
    } catch (error) {
      // Hataları göster
      setError('Geçersiz e-posta veya şifre.');
    }

    setLoading(false); // Yükleme durumunu kapat
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajını göster */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <a href="#">New user? Register</a>
      </div>
    </div>
  );
};

export default Auth;
