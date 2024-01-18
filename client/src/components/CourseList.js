import React from 'react';
import Card from './Card';
import './CourseList.css'; // 가정: CourseList 스타일을 위한 CSS 파일

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <Card key={course.id} title={course.title} description={course.description} imageUrl={course.imageUrl} />
      ))}
    </div>
  );
};

export default CourseList;
