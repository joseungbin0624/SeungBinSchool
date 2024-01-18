const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: String,
  location: String,
  description: String,
  requirements: [String], // 요구사항 배열
  // 추가적인 필드는 프로젝트 요구사항에 따라 포함될 수 있습니다.
});

module.exports = mongoose.model('Job', jobSchema);
