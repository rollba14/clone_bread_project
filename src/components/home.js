import React from 'react';
import { Jumbotron } from 'reactstrap';
import bakery_p1_img from '../assets/BakeryBootcamp_Body_1-compressor.jpg';
import bakery_p2_img from '../assets/BakeryBootcamp_Body_2-compressor.jpg';

const Home = () => {
  return(
    <div className='home'>
      <Jumbotron className="jumbotron-fluid text-center text-white m-0">
        <div className="container-fluid">
          <h1 className="display-4">Bakery Bootcamp</h1>
          <p className="h3">Opening doors through training</p>
        </div>
      </Jumbotron>
      <div className="container-fluid p-0 m-0 text-center">
        <div className="row">
          <div className="what_we_offer col-12 py-5">
            <div className="col-md-10 px-5 px-md-4 mx-auto">
              <h3 className="h1 mild_blue_text font-weight-bold">What We Offer</h3>
              <p className="bakery_program_info text-muted h4">The Bakery Production Bootcamp is a 3-week job training program. It is FREE for low income adults in the San Francisco Bay Area. We employ an intensive training curriculum comprised of two main components – Commercial Baking Training and Workforce Essential Life Skills.</p>
              <div className="row col-md-9 mx-auto bg-light p-4 justify-content-around">
                <div className="col-md-5 col-12">
                  <img src={bakery_p1_img} alt="Bakery Image 1"/>
                  <h4 className="mild_blue_text font-weight-bold">Participants Gain</h4>
                  <p className="mild_blue_text font-weight-bold">1.</p>
                  <p className="text-muted h6">60+ hours of intensive job training in the Fundamentals of Commercial Bakery Production</p>
                  <p className="mild_blue_text font-weight-bold">2.</p>
                  <p className="text-muted h6">Hands on kitchen experience with chefs & food service professionals</p>
                  <p className="mild_blue_text font-weight-bold">3.</p>
                  <p className="text-muted h6">Job Readiness & Workplace Essential Skills Instruction for the Food Industry</p>
                  <p className="mild_blue_text font-weight-bold">4.</p>
                  <p className="text-muted h6">Updated Résumé & Job Interviewing Practice</p>
                </div>
                <div className="col-md-5 col-12">
                  <img src={bakery_p2_img} alt="Bakery Image 1"/>
                  <h4 className="mild_blue_text font-weight-bold">Graduates Receive</h4>
                  <p className="mild_blue_text font-weight-bold">1.</p>
                  <p className="text-muted h6">Bakery Bootcamp Certificate of Completion</p>
                  <p className="mild_blue_text font-weight-bold">2.</p>
                  <p className="text-muted h6">SERVSafe Food Handler Certification</p>
                  <p className="mild_blue_text font-weight-bold">3.</p>
                  <p className="text-muted h6">Job placement support</p>
                  <p className="mild_blue_text font-weight-bold">4.</p>
                  <p className="text-muted h6">15 months of follow-up services & support</p>
                  <p className="mild_blue_text font-weight-bold">5.</p>
                  <p className="text-muted h6">Professional Development Workshops</p>
                  <p className="mild_blue_text font-weight-bold">6.</p>
                  <p className="text-muted h6">Exposure to Professional Networks</p>
                </div>
              </div>
            </div>
          </div>

          <div>
          </div>

          <div>
          </div>

          <div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;
