import React from 'react'
import { Jumbotron } from 'reactstrap';
import social_enterprise_img  from '../assets/social_enterprise.jpg';
import tbp_incubate_img from '../assets/tbp_incubate.jpg';

const Main = () => {
  return(
    <div className='main'>
        <Jumbotron className="jumbotron-fluid text-center text-white">
          <div className="container-fluid">
            <div className="col-lg-10 mx-auto">
              <h4 className="display-3"> Baking Through Barriers</h4>
            </div>
          </div>
        </Jumbotron>
        <div className="container-fluid p-0 m-0 text-center">
          <div className="row">
            {/* Intro message section*/}
            <div className="message col-12 py-5">
              <div className="col-md-8 px-5 px-md-4 mx-auto">
                <h2 className="text_blue_green">Help for Today. Hope for Tomorrow.</h2>
                <p className="text-muted h5">1 in 4 people in the San Francisco Bay area live in poverty. Without connecting to work, they rely on government assistance and experience or are at risk of homelessness throughout adulthood.</p>
                <div className="mild_blue_border col-5 mx-auto text-white mb-3"> </div>
                <p className="text-muted h5">The Bread Project has a vision for all motivated individuals to be able to contribute to a stronger community through stable, gainful and fulfilling work. We leverage the power of social enterprise with training, job placement assistance and support services to lead individuals out of poverty.</p>
              </div>
            </div>

            {/* Our impact section */}
            <div className="our_impact col-12 py-5">
              <div className="col-md-8 px-5 px-md-4 mx-auto">
                <div className="mb-5">
                  <h1 className="text_dark_blue">Our Impact</h1>
                  <p className="text-white h4">
                    Since 2000, we have been dedicated to changing the trajectory of the lives of low-income individuals with high barriers to employment, putting them on a path toward economic opportunity and a living wage.
                  </p>
                  <p className="text-white h4">
                    Here is the impact we have made:
                  </p>
                </div>
                <div className="row text-left">
                  <div className="col-lg-3 col-6 mb-5">
                    <div className="h1 font-weight-bold mild_blue_text">+1,800</div>
                    <span className="h5 font-weight-bold mild_blue_text">Individuals Served & Growing</span>
                  </div>
                  <div className="col-lg-3 col-6 mb-5">
                    <div className="h1 font-weight-bold mild_blue_text">85%
                    </div>
                    <span className="h5 font-weight-bold mild_blue_text">Job Placement Post-Graduation</span>
                  </div>
                  <div className="col-lg-3 col-6 mb-5">
                    <div className="h1 font-weight-bold mild_blue_text">89%
                    </div>
                    <span className="h5 font-weight-bold mild_blue_text">Job Retention Rate</span>
                  </div>
                  <div className="col-lg-3 col-6 mb-5">
                    <div className="h1 font-weight-bold mild_blue_text">30
                    </div>
                    <span className="h5 font-weight-bold mild_blue_text">Days to Get a Job</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social enterprise.     TBP Incubates */}
            <div className="col-12 py-5 text-left">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <div className="row">
                  <div className="col-md">
                    <img src={social_enterprise_img} alt="Social Enterprise Image"/>
                    <h3 className="text_blue_green mb-2">Our Social Enterprise</h3>
                    <p className="text-muted h5">We are a nonprofit, but we also run a business. The Bread Project owns and operates a commercial baking facility that provides hands-on skills training for our program participants, creates meaningful jobs for our graduates, and delivers quality products to the community.</p>
                  </div>
                  <div className="col-md">
                    <img src={tbp_incubate_img} alt="TBP Incubate Image"/>
                    <h3 className="text_blue_green mb-2">TBP Incubates</h3>
                    <p className="text-muted h5">We offer affordable licensed kitchen and storage rental with flexible scheduling to help early stage food businesses grow. In addition to the use of our commercial kitchen in a desirable Berkeley location, our trainees and graduates are available to provide hands-on culinary support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bootcamp graduates */}
            <div className="bootcamp_graduates col-12 py-5">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h3 className="text_dark_blue mb-5">Access to jobs changed the lives of John and Luc</h3>
                <div className="row">
                  <div className="col-lg">
                    <h5 className="text-muted mb-5">JOHN, Bakery Bootcamp graduate, December 2016</h5>
                    <small>
                      <p className="text-muted text-left">John was severely depressed for many years after the death of both his parents. The depression lead to an attempted suicide. He was unemployed for almost three years as he worked to rebuild his life. When he came to The Bread Project, he wanted to further build his skills in a new field after having previously worked for over a decade in hardware retail. During the training, he was a mild mannered, and very helpful participant, who worked well with his peers.</p>

                      <p className="text-muted text-left">
                      John secured employment at an East Bay Whole Foods Market (WFM) location in less than a week after he completed the Bootcamp. He was awarded “Employee of the Month” during his 8 month with Whole Foods and recently celebrated his first year with the company.</p>
                    </small>
                  </div>
                  <div className="col-lg">
                    <h5 className="text-muted mb-5">LUC, Bakery Bootcamp graduate, December 2017</h5>
                    <small>
                      <p className="text-muted text-left">
                        Luc is an experienced professional with well over a decade of work experience in transportation and customer service. He was referred to TBP by one of our community partner agencies that supports persons whose job search is impacted by criminal justice records. He excelled during The Bakery Bootcamp and distinguished himself as a leader, supporting his peers and going the extra mile to spend additional hours after training to work with the kitchen staff and increase his commercial baking knowledge and skills. We referred Luc to one of our employment partners, Whole Foods Market. Within two weeks of completing the Bootcamp training, he gained employment in the bakery production department at one of their SF locations. Luc feels prepared for his job and is excited about the potential for a new career with Whole Foods, “It’s been going great thanks to the work that The Bread Project put me through”. Luc’s employment goal includes performing well and become a Team Lead at WFM over the next two years.
                      </p>
                      <p className="text-muted text-left">
                        Luc also works with The Bread Project on some of his days off from WFM. For him, it’s an opportunity to support the program that helped him. “I learned so much from the people who put in the time to guide me, so I want to turn around and help someone following the same footsteps, and the most important part is for me to get involved and give back.”
                      </p>
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation message section */}
            <div className="mild_blue_bg col-12 py-5">
              <div className="col-md-9 px-5 px-md-4 mx-auto">
                <h1 className="text-white">Change a person’s life. Donate now.</h1>
                <p className="text-white h3">Individuals like you provide the necessary resources for The Bread Project to prepare individuals for work, and put them on a path to self-sufficiency.</p>
                <button type="button" className="btn btn-light rounded-pill px-4 py-3 "><span className="h4 mild_blue_text font-weight-bold">DONATE</span></button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main;
