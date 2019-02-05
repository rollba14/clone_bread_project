import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => {
  return(
    <div className='home'>
      <Jumbotron className="jumbotron-fluid text-center text-white">
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
              <p className="text-muted h5">The Bakery Production Bootcamp is a 3-week job training program. It is FREE for low income adults in the San Francisco Bay Area. We employ an intensive training curriculum comprised of two main components – Commercial Baking Training and Workforce Essential Life Skills.</p>
              <div className="row col-md-10 mx-auto bg-white">
                <div className="col-md-6 col-12">
                  <h4 className="mild_blue_text font-weight-bold">Participants Gain</h4>
                </div>
                <div className="col-md-6 col-12">
                  <h4 className="mild_blue_text font-weight-bold">Graduates Receive</h4>
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
