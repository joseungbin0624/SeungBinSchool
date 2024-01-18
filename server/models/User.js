const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // 추가적인 사용자 정보 필드는 프로젝트 요구사항에 따라 결정됩니다.
});

// 비밀번호 해시하기 전에 실행
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 8);
});

module.exports = mongoose.model('User', userSchema);

