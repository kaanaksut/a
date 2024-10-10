const Task = require('../models/taskModel');

// Yeni görev oluşturma
const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    
    const task = new Task({
      title,
      description,
      status,
      dueDate,
      user: req.user._id,  // Kullanıcı oturum açtıysa kullanıcı ID'si gelir
    });

    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(400).json({ message: 'Görev oluşturulamadı', error: error.message });
  }
};

// Tüm görevleri listeleme
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Görevler alınamadı', error: error.message });
  }
};

// Tek bir görevi güncelleme
const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }

    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.status = req.body.status || task.status;
    task.dueDate = req.body.dueDate || task.dueDate;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Görev güncellenemedi', error: error.message });
  }
};

// Görev silme
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }

    await task.remove();
    res.json({ message: 'Görev silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Görev silinemedi', error: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
