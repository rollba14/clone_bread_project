import React from 'react'
import BootcampSchedule from './bootcamp_schedule_table'
import SocialMediaBtns from './social_media_btn.js';

const Application = () => {
  return(
    <div className='application'>
      <div className="container-fluid p-0 m-0 text-center">
        <div className="row">

          <div className="col-12 pt-4 pb-3">
            <div className="col-md-10 px-md-5 px-md-4 mx-auto">
              <p className="text-left h2 light_darker_text pb-4">
                Apply to Program
              </p>

              <div className="mild_blue_bg text-white px-md-5">
                <p className="h4">
                  <span className="h1 font-weight-bold">Get Started</span><br/>
                  The process is easy to apply – download and complete the application below and participate in an intake interview with a member of The Bread Project program staff.<br/>
                  <a href="https://breadproject.org/wp-content/uploads/2019/02/FY-19-Application-FINAL.pdf" className="btn light-bg rounded-pill px-4 py-0 text-uppercase"><span className="h4 mild_blue_text font-weight-bold">The Bread Project Application</span></a>
                </p>
              </div>
            </div>
          </div>

          <div className="bootcamps col-12 py-5">
            <div className="col-md-10 px-md-5 px-md-4 mx-auto">
              <div className="row">
                <div className="col-lg-4 col-12 mx-auto text-muted h5">
                  <p className="font-weight-bold">To schedule an appointment for an intake interview, contact us at:</p>
                  <p>Email: <a href="#" className="mild_blue_text">program@breadproject.org</a></p>
                  <p>Office: <a href="#" className="mild_blue_text">510.594.1702</a></p>
                  <p>Mobile: <a href="#" className="mild_blue_text">510.418.0617</a></p>
                  <div className="mild_blue_border col-4 mx-auto text-white m-4"> </div>
                  <p>Interviews take place on <span className="font-weight-bold">Wednesdays</span> and <span className="font-weight-bold">Thursdays</span> between <span className="font-weight-bold">12:00pm – 3:00pm</span></p>
                  <p className="font-weight-lighter h6"><small>Certain applicants may be required to do a 2-hour kitchen exercise to complete your application.</small></p>
                  <div className="mild_blue_border col-4 mx-auto text-white m-4"> </div>
                  <p>Our program has certain eligibility and documentation requirements</p>
                  <div><a className="btn mild_blue_bg rounded-pill px-4 py-1"><span className="h4 font-weight-bold text-white">DOWNLOAD APPLICATION</span></a></div>
                  <a href="#" className="mild_blue_text">See Eligibility Information</a>
                </div>
                <div className="col-lg-8 col-12 mx-auto">
                  <BootcampSchedule/>
                </div>
              </div>
            </div>
          </div>

          <SocialMediaBtns category={"apply-to-program"}/>

        </div>
      </div>
    </div>
  )
}

export default Application;
