import React from 'react'
import twitter_icon_gray from '../assets/twitter_icon_gray.png';
import facebook_icon_gray from '../assets/facebook_icon_gray.png';

const Social_Media_Btns = () => {
  return(
    <div className='social_media col-12 py-5'>
      <div className="row">
        <div className="col-md-10 px-5 px-md-4 mx-auto text-left">
          <span className="light_darker_text font-weight-bold text-left"><small>Share this:</small></span>
          <a href="https://breadproject.org/?share=twitter&nb=1" target="_blank">
            <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                <img src={twitter_icon_gray}/>
                <small>Twitter</small>
            </button>
          </a>
          <a href="https://breadproject.org/?share=facebook&nb=1" target="_blank">
            <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                <img src={facebook_icon_gray}/>
                <small>Facebook</small>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Social_Media_Btns;
