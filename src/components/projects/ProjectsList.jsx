import React from 'react';
import { projectDataList } from '../../db/projectDataList';
import { Project } from './Project';

export const ProjectsList = () => {
  return (
    <main className='project-list'>
      {projectDataList.map((projectData) => (
        <Project key={projectData.name} projectData={projectData} />
      ))}
    </main>
  );
};
