import React from 'react';
import Card from './Card';
import './JobList.css'; // 가정: JobList 스타일을 위한 CSS 파일

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <Card key={job.id} title={job.title} description={job.description} imageUrl={job.imageUrl} />
      ))}
    </div>
  );
};

export default JobList;
