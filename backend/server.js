const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // CORS eklendi

dotenv.config();  // .env dosyasını yükler

// MongoDB'ye bağlan
connectDB().then(() => {
  console.log('MongoDB Bağlantısı Başarılı');
}).catch((error) => {
  console.error('MongoDB Bağlantısı Başarısız:', error.message);
  process.exit(1);  // Bağlantı başarısızsa sunucuyu durdur
});

const app = express();

app.use(cors()); // CORS hatasını önlemek için
app.use(express.json()); // JSON verileriyle çalışabilmek için

// Kullanıcı rotalarını bağla
app.use('/api/users', userRoutes);

// Görev rotalarını bağla
app.use('/api/tasks', taskRoutes);

// Sunucuyu başlat
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
