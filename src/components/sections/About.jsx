import React from 'react';
import portraitImg1 from '../../assets/portrait1.jpg';

export const About = () => {
  return (
    <section className='about-section'>
      <div className='content'>
        <div className='text-obstacle'>x</div>
        <div className='img-container'>
          <img src={portraitImg1} alt='Portrait' />
          <h1>First Last</h1>
        </div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          natus delectus reiciendis ratione facere odit sit, esse veritatis
          mollitia porro, enim quaerat rem. Facere voluptatem, quia fugiat esse
          laboriosam labore ab non nemo expedita corporis ratione, officiis
          vitae dignissimos numquam velit libero culpa odio ut. Illum nobis ut
          earum animi.
        </p>
        <div className='socials'>
          <i className='devicon-github-original'></i>
          <i className='devicon-linkedin-plain'></i>
          <i className='devicon-twitter-original'></i>
        </div>
      </div>
    </section>
  );
};
