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
            <h3 className="display-3">What We Offer</h3>
            <p className="muted h3">The Bakery Production Bootcamp is a 3-week job training program. It is FREE for low income adults in the San Francisco Bay Area. We employ an intensive training curriculum comprised of two main components – Commercial Baking Training and Workforce Essential Life Skills.</p>
            <div className="row">
              <div className="col-md-6 col-12">
                <h4>Participants Gain</h4>
              </div>
              <div className="col-md-6 col-12">
                <h4>Graduates Receive</h4>
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
