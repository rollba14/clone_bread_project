import React from 'react'
import { Jumbotron } from 'reactstrap';

const Main = () => {
  return(
    <div className='main'>
        <Jumbotron className="jumbotron-fluid text-center text-white">
          <div className="container-fluid">
            <div className=""> Baking Through Barriers</div>
          </div>
        </Jumbotron>
        <div className="container-fluid p-0 m-0 text-center">
          <div className="row">
            {/* Intro message section*/}
            <div className="message col-12 py-5">
              <div className="col-md-9 px-5 px-md-4 mx-auto">
                <h1 className="">Help for Today. Hope for Tomorrow.</h1>
                <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
                <div className="border-top-3 border-primary col-5 mx-auto text-white mb-3"> </div>
                <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
              </div>
            </div>

            {/* Our impact section */}
            <div className="our_impact col-12 py-5">
              <div className="col-md-9 px-5 px-md-4 mx-auto">
                <div>
                  <h1>Our Impact</h1>
                  <p className="text-white">
                    Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text
                  </p>
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
            </div>

            {/* Social enterprise.     TBP Incubates */}
            <div className="col-12 py-5">
              <div className="col-md-9 px-5 px-md-4 mx-auto">
                <div className="row">
                  <div className="col-md">
                    <h2>Our Social Enterprise</h2>
                    <p> Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
                  </div>
                  <div className="col-md">
                    <h2>TBP Incubates</h2>
                    <p> Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bootcamp graduates */}
            <div className="bootcamp_graduates col-12 py-5">
              <div className="col-md-9 px-5 px-md-4 mx-auto">
                <h2>Access to jobs changed the lives of John and Luc</h2>
                <div className="row">
                  <div className="col-lg">
                    <h2>JOHN, Bakery Bootcamp graduate, December 2016</h2>
                    <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
                  </div>
                  <div className="col-lg">
                    <h2>LUC, Bakery Bootcamp graduate, December 2017</h2>
                    <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation message section */}
            <div className="mild_blue col-12 py-5">
              <div className="col-md-9 px-5 px-md-4 mx-auto">
                <h2 className="text-white">Change a person’s life. Donate now.</h2>
                <p className="text-white">Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text</p>
                <button type="button" className="btn btn-light text-primary rounded-pill px-4 py-3">DONATE NOW</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main;
