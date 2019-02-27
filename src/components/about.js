import React, {Component} from 'react'
import about_banner_img from '../assets/WhoWeAre_Hero-compressor.jpg';
import Infographic_compressor from "../assets/Infographic-compressor.jpg"
import Pamela_headshot from "../assets/Headshots_0003_TBP-Pamela_Calloway-3651-RT3-compressor.jpg"
import Gram_headshot from '../assets/Headshots-Empty.jpg'
import Lynn_headshot from '../assets/Headshots_0004_TBP-Lynn_Lukow-3640-RT-compressor.jpg'
import Usha_headshot from '../assets/Headshots_0001_TBP-Usha_Gongal-3673-RT-compressor.jpg'
import  Trent_headshot from '../assets/Headshots_0002_TBP-Trent_Cooper-3695-RT-compressor.jpg'
import Veronica_headshot from '../assets/Headshots_0000_TBP-Veronica_Barron-3632-RT-compressor.jpg'

class About extends Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render(){
    return(
      <div className='about'>
        <h4 class="h1 mild_blue_text text-center p-5 font-weight-bold">We Prepare People for Work & Life</h4>
        <img src={about_banner_img} alt="About Banner Image"/>
        <div className="container-fluid p-0 m-0 text-center">
          <div className="row">
            {/* Intro message section*/}
            <div className="vision col-12 py-5">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h2 className="p-3 mild_blue_text">Our Vision</h2>
                <p className="text-muted h5">
                  The Bread Project’s vision is to lead work-readiness, employment support & professional development programs for marginalized individuals in the San Francisco Bay Area, and to be a model for this work nationwide.
                </p>
                <div className="mild_blue_border col-4 mx-auto text-white m-5"> </div>
                <p className="text-muted h5">
                  When thousands of low-income, chronically unemployed adults are able to make a successful transition to employment and have ongoing access to further education to increase their economic opportunities, they improve not only their own lives but those of their families and communities, for generations to come.
                </p>
              </div>
            </div>

            <div className="history col-12 py-5 mild_blue_bg">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h1 className="p-3 text-white">Our History</h1>
                <p className="text-white">
                  The Bread Project was founded as a California nonprofit 501(c)(3) public benefit corporation in December 2000. Lucie Buchbinder and Susan Phillips, specialists in subsidized housing, created the organization to help low-income housing tenants obtain job skills training and become self-sufficient. After a successful beginning at the San Francisco Baking Institute in South San Francisco, The Bread Project transferred to the East Bay and partnered with Berkeley Adult School and Oakland Unified School District Adult and Career Education.
                </p>
                <p className="text-white">
                  With growth came the opportunity for The Bread Project to operate its own training facility and wholesale bakery. In 2010, we moved to Emeryville. In 2014, the award-winning 3-week Bakery Bootcamp™ was established to offer a quicker pathway to employment. In 2015, The Bread Project moved again to its current facility – zoned for both retail and wholesale operations –in Berkeley, California. During our 18-year history, we have served over 1,800 low-income individuals. Today 90% of graduates find jobs, and average time to employment is only one month.
                </p>
              </div>
            </div>

            <div className="vision col-12 py-5 light_darker_bg">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h3 className="p-3 h1 mild_blue_text">Our Goals</h3>
                <p className="text-white h4">
                  We are proud of our accomplishments to date, but more work needs to be done. As income inequality continues to increase in the Bay Area, our work is even more important. Over the next five years we are committed to growing our programs and scaling our social enterprise.
                </p>
              <div className="col-12 col-sm-7 col-lg-6 mx-auto">
                <img src={Infographic_compressor} alt="Infographic-compressor Image"/>
              </div>
              </div>
            </div>

            <div className="staff col-12 py-5">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h3 className="p-5 mild_blue_text">Our Staff</h3>

                <div className="row">
                  <div className="col-12 col-md-4">
                    <img src={Pamela_headshot} alt="Pamela Headshot"/>
                    <p className="mild_blue_text font-weight-bold h4 mt-3">Pamela Calloway, Esq.</p>
                    <h5 className="mild_blue_text h5">Executive Director and Board Member
                    </h5>
                    <p className="text-muted">
                      Pamela brings deep experience in both workforce and regional economic development and a passion for the mission. She has served as Vice President of Programs for RDJ Enterprises, District Director for Congresswoman Barbara Lee (D-CA13), President of the Board of Commissioners for the Port of Oakland, and has advised mayors, Members of Congress, business associations and nonprofit organizations on the strategic use of resources to develop self-sustaining skills for those with barriers to employment. Pamela is a graduate of Fisk University, summa cum laude and Phi Beta Kappa and Georgetown University Law Center where she served as National Chair for the Black Law Students Association. Ms. Calloway is an active member of the State Bar of California. She is a graduate of TBP Bakery BootcampTM, an accomplishment that highlights her desire to understand the organization and those we serve.
                    </p>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default About;
