const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); // JSON 본문 파싱

// 라우트 연결
const coursesRouter = require('./routes/courses');
const jobsRouter = require('./routes/jobs');
const usersRouter = require('./routes/users');

app.use('/courses', coursesRouter);
app.use('/jobs', jobsRouter);
app.use('/users', usersRouter);

// 데이터베이스 연결 및 서버 시작
mongoose.connect('mongodb://localhost/seungbinschool');
const db = mongoose.connection;
db
