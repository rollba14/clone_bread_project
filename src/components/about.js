import React from 'react';
import about_banner_img from '../assets/WhoWeAre_Hero-compressor.jpg';

const About = () => {
  return(
    <div className='about'>
      <h4 class="h1 mild_blue_text text-center p-5 font-weight-bold">We Prepare People for Work & Life</h4>
      <img src={about_banner_img} alt="About Banner Image"/>
      <div className="container-fluid p-0 m-0 text-center">
        <div className="row">
          {/* Intro message section*/}
          <div className="vision col-12 py-5">
            <div className="col-md-10 px-5 px-md-4 mx-auto">
              <h3 className="p-5 mild_blue_text">Our Vision</h3>
              <p className="text-muted h5">
                The Bread Project’s vision is to lead work-readiness, employment support & professional development programs for marginalized individuals in the San Francisco Bay Area, and to be a model for this work nationwide.
              </p>
              <div className="mild_blue_border col-4 mx-auto text-white m-5"> </div>
              <p className="text-muted h5">
                When thousands of low-income, chronically unemployed adults are able to make a successful transition to employment and have ongoing access to further education to increase their economic opportunities, they improve not only their own lives but those of their families and communities, for generations to come.
              </p>
            </div>
          </div>

          <div className="History col-12 py-5">
            <div className="col-md-8 px-5 px-md-4 mx-auto">
              hi
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
