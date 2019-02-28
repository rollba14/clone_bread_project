import React, {Component} from 'react'
import Staff from './staff'
import about_banner_img from '../assets/WhoWeAre_Hero-compressor.jpg';
import Infographic_compressor from "../assets/Infographic-compressor.jpg"

class About extends Component{
  constructor(props){
    super(props);
    var people = require('../people.json');
    this.state = {
      staff: people.staff,
      directors: people.directors,
      advisory_council: people.advisory_council
    }
  }

  render(){
    const staff_elements = this.state.staff.map(s=>{
      return (<Staff staff={s} key={s.name}/>)
    })
    const directors_elements = this.state.directors.map(d=>{
      return (
        <div className="council col-12 col-md-4" key={d.name}>
          <p className="light_darker_text font-weight-bold h4 mt-3">{d.name}</p>
          <h5 className="light_darker_text h5">{d.role}
          </h5>
          <h5 className="light_darker_text h5">{d.title}
          </h5>
          <a className="light_darker_text" href={d.linkedin} target="_blank">{d.linkedin? "LinkedIn":""}</a>
        </div>
      )
    })
    const council_elements = this.state.advisory_council.map(a=>{
      return (
        <div className="council" key={a.name}>

        </div>
      )
    })
    return(
      <div className='about'>
        <h4 className="h1 mild_blue_text text-center p-4 font-weight-bold">We Prepare People for Work & Life</h4>
        <img src={about_banner_img} alt="About Banner Image"/>
        <div className="container-fluid p-0 m-0 text-center">
          <div className="row">
            {/* Intro message section*/}
            <div className="vision col-12 pt-4 pb-3">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h2 className="p-3 light_darker_text">Our Vision</h2>
                <p className="text-muted h5">
                  The Bread Project’s vision is to lead work-readiness, employment support & professional development programs for marginalized individuals in the San Francisco Bay Area, and to be a model for this work nationwide.
                </p>
                <div className="mild_blue_border col-4 mx-auto text-white m-5"> </div>
                <p className="text-muted h5">
                  When thousands of low-income, chronically unemployed adults are able to make a successful transition to employment and have ongoing access to further education to increase their economic opportunities, they improve not only their own lives but those of their families and communities, for generations to come.
                </p>
              </div>
            </div>

            <div className="history col-12 py-4 mild_blue_bg">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h1 className="p-4 text-white">Our History</h1>
                <p className="text-white">
                  The Bread Project was founded as a California nonprofit 501(c)(3) public benefit corporation in December 2000. Lucie Buchbinder and Susan Phillips, specialists in subsidized housing, created the organization to help low-income housing tenants obtain job skills training and become self-sufficient. After a successful beginning at the San Francisco Baking Institute in South San Francisco, The Bread Project transferred to the East Bay and partnered with Berkeley Adult School and Oakland Unified School District Adult and Career Education.
                </p>
                <p className="text-white">
                  With growth came the opportunity for The Bread Project to operate its own training facility and wholesale bakery. In 2010, we moved to Emeryville. In 2014, the award-winning 3-week Bakery Bootcamp™ was established to offer a quicker pathway to employment. In 2015, The Bread Project moved again to its current facility – zoned for both retail and wholesale operations –in Berkeley, California. During our 18-year history, we have served over 1,800 low-income individuals. Today 90% of graduates find jobs, and average time to employment is only one month.
                </p>
              </div>
            </div>

            <div className="vision col-12 py-4 light_darker_bg">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h3 className="p-4 h1 mild_blue_text">Our Goals</h3>
                <p className="text-white h4">
                  We are proud of our accomplishments to date, but more work needs to be done. As income inequality continues to increase in the Bay Area, our work is even more important. Over the next five years we are committed to growing our programs and scaling our social enterprise.
                </p>
              <div className="col-12 col-sm-7 col-lg-6 mx-auto">
                <img src={Infographic_compressor} alt="Infographic-compressor Image"/>
              </div>
              </div>
            </div>

            <div className="staff col-12 py-4">
              <div className="col-md-10 px-5 px-md-4 mx-auto">
                <h2 className="p-4 mild_blue_text">Our Staff</h2>

                <div className="row mb-5">
                  {staff_elements}
                </div>
                <h2 className="p-5 mild_blue_text h1 font-weight-bold">The Board of Directors</h2>
                <div className="row">
                  {directors_elements}
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
