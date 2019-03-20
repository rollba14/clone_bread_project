import React from 'react'
import facebook_icon from '../assets/facebook_icon.png';
import twitter_icon from '../assets/twitter_icon.png';
import google_plus_icon from '../assets/google_plus_icon.png';
import rss_icon from '../assets/rss_icon.png';

const Footer = () => {
  return(
    <div className='footer row'>
      {/*<div className="d-flex flex-row-reverse mx-5">*/}
      <div className="col-md-10 px-5 px-md-4 mx-auto d-flex align-items-center justify-content-end">
        <img src={facebook_icon} className="icon"/>
        <img src={twitter_icon} className="icon"/>
        <img src={google_plus_icon} className="icon"/>
        <img src={rss_icon} className="icon"/>
      </div>
    </div>
  )
}

export default Footer;
