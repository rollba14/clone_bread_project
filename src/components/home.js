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
    </div>
  )
}

export default Home;
