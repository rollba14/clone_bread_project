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
        <div className="box_input" key={`${amount}-${i}`}>
          <input type="radio" id={`suggested_amount_${i}`} name="donation_suggested_amount" value={amount}/>
          <label htmlFor={`suggested_amount_${i}`}>
            $ {amount}
          </label>
        </div>
      )
    })

    return(
      <div className="donation_form box_shadow_bg">
        <form action="#" method="post" onSubmit={this.onSubmit}>
            <div className="h5">Choose amount</div>
            <div className="suggested_amount_boxes">
              {suggested_amount_divs}
            </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default DonationForm;
