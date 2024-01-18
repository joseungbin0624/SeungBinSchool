import React from 'react';
import JobList from '../components/JobList';

// 가정: 임시 채용 정보 데이터
const jobs = [
  { id: 1, title: 'Job 1', description: 'Job 1 description', imageUrl: 'job1.jpg' },
  // ... 다른 채용 정보들
];

const Jobs = () => {
  return (
    <div>
      <h1>Jobs</h1>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Jobs;
