import React from 'react';
import openInNewSvg from '../../assets/open-in-new.svg';

export const Project = ({ projectData }) => {
  const { name, description, image, links } = projectData;

  return (
    <div className='project'>
      <div className='img-container'>
        <img src={image.src} alt={image.alt} />
      </div>
      <div className='content'>
        <div className='header'>
          <h3>{name || 'Default Project Name'}</h3>
          <a href={links.github}>
            <i className='devicon-github-original'></i>
          </a>
          <a href={links.live}>
            <img src={openInNewSvg} alt='visit project site'></img>
          </a>
        </div>
        <p>
          {description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quisquam.'}
        </p>
      </div>
    </div>
  );
};
