import React, {Component} from 'react'
import twitter_icon_gray from '../assets/twitter_icon_gray.png';
import facebook_icon_gray from '../assets/facebook_icon_gray.png';

class SocialMediaBtns extends Component{
  render(){
    let category = this.props.category;
    let twitterLink,fbLink;
    if(category) {
      twitterLink = `https://breadproject.org/${category}/?share=twitter&nb=1`;
      fbLink = `https://breadproject.org/${category}/?share=facebook&nb=1`;
    } else {
      twitterLink = "https://breadproject.org/?share=twitter&nb=1";
      fbLink = "https://breadproject.org/?share=facebook&nb=1";
    }

    return(
      <div className='social_media col-12 py-5'>
        <div className="row">
          <div className="col-md-10 px-5 px-md-4 mx-auto text-left">
            <span className="light_darker_text font-weight-bold text-left"><small>Share this:</small></span>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                  <img src={twitter_icon_gray} alt="twitter icon"/>
                  <small>Twitter</small>
              </button>
            </a>
            <a href={fbLink} target="_blank" rel="noopener noreferrer">
              <button type="button" className="py-0 btn btn-sm btn-outline-secondary">
                  <img src={facebook_icon_gray} alt="facebook icon gray"/>
                  <small>Facebook</small>
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialMediaBtns;
