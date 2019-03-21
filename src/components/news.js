import React from 'react'
import Social_Media_Btns from './social_media_btn.js';

const News = () => {
  return(
    <div className='news'>
      <div className="container-fluid p-0 m-0 text-center">
        <div className="row">

          <div className="col-12 pt-4 pb-3">
            <div className="col-md-10 px-5 px-md-4 mx-auto">
              <p className="text-left h2 light_darker_text border-bottom border-gray pb-4">
                News & Events
              </p>
              <div className="text-muted h1 border-bottom border-gray">
                <p>
                  Join us at Sip, Savor & Support on April 9th!
                  <br/>
                  Click
                  <a className="light_darker_text" target="_blank" href="https://www.eventbrite.com/e/youre-invited-sip-savor-support-the-bread-project-tickets-57574843908?aff=ebdssbdestsearch"> HERE </a>
                  for tickets.
                </p>
              </div>
              <img src={require('../assets/2019-Invite-V7a-1.jpg')} alt="News Photo"/>
              <br/>
              <br/>
              <small className="text-muted font-weight-bold">
                Click
                <a className="light_darker_text" target="_blank" href="https://www.eventbrite.com/e/youre-invited-sip-savor-support-the-bread-project-tickets-57574843908?aff=ebdssbdestsearch"> HERE </a>
                TO SIGN UP FOR THE EVENT!
              </small>
            </div>
          </div>

          <Social_Media_Btns category={"news-events"}/>

        </div>
      </div>
    </div>
  )
}

export default News;
