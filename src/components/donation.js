import React, {Component} from 'react'
import twitter_icon_blue from '../assets/twitter_icon_blue.png';
import linkedin_icon_blue from '../assets/linkedin_icon_blue.png';
import facebook_icon_blue from '../assets/facebook_icon_blue.png';
import DonationForm from './donation_form';

class Donation extends Component{
  render(){
    return(
      <div className='donation container-fluid'>
        <div className="campaign_title text-center">
          <h1>
            The Bread Project Fall Matching Grant Campaign
          </h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 order-md-first">
            <div className="campaign_msg box_shadow_bg">
              <p className="d-flex justify-content-around flex-wrap">
                <a href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdonorbox.org%2Fdonate-to-the-bread-project" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn btn-sm btn-outline-secondary fb-btn">
                      <img src={facebook_icon_blue} alt="twitter icon"/>
                      <span>Facebook</span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdonorbox.org%2Fdonate-to-the-bread-project&title=The+Bread+Project+Fall+Matching+Grant+Campaign" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn btn-sm btn-outline-secondary linkedin-btn">
                      <img src={linkedin_icon_blue} alt="twitter icon"/>
                      <span>LinkedIn</span>
                  </button>
                </a>
                <a href="https://twitter.com/intent/tweet/?text=Donate+to+The+Bread+Project+%7C+The+Bread+Project&url=https%3A%2F%2Fdonorbox.org%2Fdonate-to-the-bread-project" target="_blank" rel="noopener noreferrer">
                  <button type="button" className="btn btn-sm btn-outline-secondary twitter-btn">
                      <img src={twitter_icon_blue} alt="twitter icon"/>
                      <span>Twitter</span>
                  </button>
                </a>
              </p>
              <p>
                Support The Bread Project's mission to provide low-income residents of the Bay Area with free training and job readiness skills for employment in the baking and food service industry.
              </p>
              <p>
                The Bread Project is an IRS-approved 501(c)(3) nonprofit organization, Tax ID 94-3363920. All contributions are tax deductible as allowed by law.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 order-first">
            <div className="row no-gutters">
              <DonationForm/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Donation;
