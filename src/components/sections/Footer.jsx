import React from 'react';
import emailOutlineSvg from '../../assets/email-outline.svg';
import footerImg from '../../assets/footer.jpg';
import phoneOutlineSvg from '../../assets/phone-outline.svg';

export const Footer = () => {
  return (
    <footer>
      <div className='contact-info'>
        <h2>Contact me</h2>
        <h4>
          Please get in touch if you think our work could be mutually
          beneficial!
        </h4>
        <p>
          1234 Random Road
          <br />
          Random Town, California 12345
        </p>
        <p>
          <img
            className='icon inverted'
            src={phoneOutlineSvg}
            alt='phone icon'
          />
          555-555-5555
        </p>
        <p>
          <img
            className='icon inverted'
            src={emailOutlineSvg}
            alt='email icon'
          />
          firstlast.is.not.real@gmail.com
        </p>
        <div className='socials-large inverted'>
          <a href='/'>
            <i className='devicon-github-original'></i>
          </a>
          <a href='/'>
            <i className='devicon-linkedin-plain'></i>
          </a>
          <a href='/'>
            <i className='devicon-twitter-original'></i>
          </a>
        </div>
      </div>
      <div className='img-container'>
        <img src={footerImg} alt='Portait' />
      </div>
    </footer>
  );
};
