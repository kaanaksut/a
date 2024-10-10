const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getTasks) // Tüm görevleri getirir
  .post(protect, createTask); // Yeni görev ekler

router.route('/:id')
  .put(protect, updateTask) // Belirli bir görevi günceller
  .delete(protect, deleteTask); // Belirli bir görevi siler

module.exports = router;
