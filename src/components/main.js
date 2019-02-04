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
        <div className="container px-md-3 text-center">

          // Intro message section
          <div className="message col-md-10 px-md-4 mx-auto">
            <h1 className="display-5">Help for Today. Hope for Tomorrow.</h1>
            <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
            <div className="border-top-3 border-primary col-5 mx-auto text-white mb-3"> </div>
            <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
          </div>

          // Our impact section
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

        </div>
    </div>
  )
}

export default Main;
