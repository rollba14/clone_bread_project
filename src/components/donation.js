import React, {Component} from 'react'
import twitter_icon_gray from '../assets/twitter_icon_gray.png';
import facebook_icon_gray from '../assets/facebook_icon_gray.png';

class Donation extends Component{
  render(){
    return(
      <div className='donation'>
        <div className="campaign_title">

        </div>
        <div className="row">
          <div className="col-4">
            <div className="campaign_msg">
              <div>
                <a href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdonorbox.org%2Fdonate-to-the-bread-project" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                      <img src={facebook_icon_gray} alt="twitter icon"/>
                      <small>Facebook</small>
                  </button>
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdonorbox.org%2Fdonate-to-the-bread-project&title=The+Bread+Project+Fall+Matching+Grant+Campaign" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                      <img src={twitter_icon_gray} alt="twitter icon"/>
                      <small>LinkedIn</small>
                  </button>
                </a>
                <a href="https://twitter.com/intent/tweet/?text=Donate+to+The+Bread+Project+%7C+The+Bread+Project&url=https%3A%2F%2Fdonorbox.org%2Fdonate-to-the-bread-project" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                      <img src={twitter_icon_gray} alt="twitter icon"/>
                      <small>Twitter</small>
                  </button>
                </a>
              </div>
              <p>
                Support The Bread Project's mission to provide low-income residents of the Bay Area with free training and job readiness skills for employment in the baking and food service industry.
              </p>
              <p>
                The Bread Project is an IRS-approved 501(c)(3) nonprofit organization, Tax ID 94-3363920. All contributions are tax deductible as allowed by law.
              </p>
            </div>
          </div>

          <div className="col-8">
            <div className="donation_form">

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Donation;
