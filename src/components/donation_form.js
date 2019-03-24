import React, {Component} from 'react'

class DonationForm extends Component{

  onSubmit(e){
    e.preventDefault();
    let donationAmount = e.target["donation_suggested_amount"].value;
    console.log(donationAmount);
  }

  render(){
    const suggested_amount = [10,25,50,100,250,500];
    const suggested_amount_divs = suggested_amount.map((amount,i)=>{
      return(
        <div className="box_input col-4" key={`${amount}-${i}`}>
          <input type="radio" id={`suggested_amount_${i}`} name="donation_suggested_amount" value={amount}/>
          <label htmlFor={`suggested_amount_${i}`}>
            $ {amount}
          </label>
        </div>
      )
    })

    return(
      <div className="donation_form box_shadow_bg col col-lg-10 mx-auto">
        <form action="#" method="post" onSubmit={this.onSubmit}>
          <div className="h5">Choose amount</div>
          <div className="donation_form_body">
            <div className="suggested_amount_boxes row">
              {suggested_amount_divs}
            </div>
            <div className="custom_amount_box">
              <label htmlFor="custom_amount">$</label>
              <input type="text" id="custom_amount"/>
            </div>
            <div className="comment text-left">
              <input type="checkbox" id="comment_checkbox"/>
              <label htmlFor="comment_checkbox">Write us a comment</label>
            </div>
            <input type="submit" className="btn" value="Donate"/>
          </div>
        </form>
      </div>
    )
  }
}

export default DonationForm;
