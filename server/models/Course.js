const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  instructor: String,
  duration: String, // 예: "10 weeks"
  level: String, // 예: "Beginner", "Intermediate", "Advanced"
  // 필요에 따라 추가 필드를 포함할 수 있습니다.
});

module.exports = mongoose.model('Course', courseSchema);

