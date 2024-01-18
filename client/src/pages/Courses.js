import React from 'react';
import CourseList from '../components/CourseList';

// 가정: 임시 코스 데이터
const courses = [
  { id: 1, title: 'Course 1', description: 'Course 1 description', imageUrl: 'image1.jpg' },
  // ... 다른 코스들
];

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
