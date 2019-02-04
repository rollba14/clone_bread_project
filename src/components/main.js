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
        <div className="message container px-md-3 text-center">
          <div className="col-md-10 px-md-4 mx-auto">
            <h1 className="display-5">Help for Today. Hope for Tomorrow.</h1>
            <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
            <div className="border-top-3 border-primary col-5 mx-auto text-white mb-3"> </div>
            <p>Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text Placeholder Text </p>
          </div>
        </div>
    </div>
  )
}

export default Main;
