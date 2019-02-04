import React from 'react'
import { Jumbotron } from 'reactstrap';

const Main = () => {
  return(
    <div className='main'>
        <Jumbotron className="jumbotron-fluid text-center text-white">
          <div className="container-fluid">
            <div className="display-3"> Baking Through Barriers</div>
          </div>
        </Jumbotron>
        <div className="container p-0 m-0 text-center display-5">
          <div className="row">
            {/* Intro message section*/}
            <div className="message col-md-10 px-md-4 mx-auto">
              <h1 className="">Help for Today. Hope for Tomorrow.</h1>
              <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
              <div className="border-top-3 border-primary col-5 mx-auto text-white mb-3"> </div>
              <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
            </div>
          </div>

          {/* Our impact section */}
          <div className="our_impact col-md-10 px-md-4 mx-auto">
            <div>
              <h1>Our Impact</h1>
              <p></p>
            </div>
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-3">
              </div>
              <div className="col-md-3">
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>

          {/* Social enterprise.     TBP Incubates */}
          <div className=" col-md-10 px-md-4 mx-auto">
            <div className="row">
              <div className="col-md">
                <h2>Our Social Enterprise</h2>
                <p> blah blah </p>
              </div>
              <div className="col-md">
                <h2>TBP Incubates</h2>
                <p> blah blah </p>
              </div>
            </div>
          </div>

          {/* Bootcamp graduates */}
          <div className=" col-md-10 px-md-4 mx-auto">
            <h2>Access to jobs changed the lives of John and Luc</h2>
            <div className="row">
              <div className="col-md">
                <h2>JOHN, Bakery Bootcamp graduate, December 2016</h2>
                <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
              </div>
              <div className="col-md">
                <h2>LUC, Bakery Bootcamp graduate, December 2017</h2>
                <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
              </div>
            </div>
          </div>

          {/* Donation message section */}
          <div className="mild_blue col-md-10 px-md-4 mx-auto">
            <h2>Change a person’s life. Donate now.</h2>
            <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
            <button type="button" className="btn btn-light text-primary rounded-pill px-4 py-3">DONATE NOW</button>
          </div>
        </div>
    </div>
  )
}

export default Main;
