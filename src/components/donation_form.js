import React, {Component} from 'react'

class DonationForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      commentChecked: false,
    }
  }

  onSubmit=(e)=>{
    e.preventDefault();
    let form = e.target;
    this.sanitizeInput(form);
  }

  sanitizeInput(form){
    let suggestedAmount = form["donation_suggested_amount"].value;
    let custom_amount = form["donation_custom_amount"].value;
    let comment = form["donation_comment"].value;
    console.log(suggestedAmount, custom_amount,comment);
  }

  onChangeCommentBox =(e)=>{
    this.setState({
      commentChecked: !this.state.commentChecked,
    },()=>{
      if(this.state.commentChecked) this.commentInput.focus();
    })
  }

  clearOtherInputBox=(e)=>{
    if(e.target.tagName === 'LABEL'){
      this.customAmountBox.value='';
    }else{
      let inputs = this.suggestedBox.getElementsByTagName('input');
      for(let input of inputs){
        input["checked"] = false;
      }
    }
  }

  adjustInputHeight=(e)=>{
    let input = e.target;
    input.style.height = input.scrollHeight + 'px';
  }

  render(){
    const suggested_amount = [10,25,50,100,250,500];
    const suggested_amount_divs = suggested_amount.map((amount,i)=>{
      return(
        <div className="box_input col-4" key={`${amount}-${i}`}>
          <input type="radio" id={`suggested_amount_${i}`} name="donation_suggested_amount" value={amount}/>
          <label htmlFor={`suggested_amount_${i}`} onClick={this.clearOtherInputBox}>
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
            <div ref={(div)=>{this.suggestedBox = div}} className="suggested_amount_boxes row">
              {suggested_amount_divs}
            </div>
            <div className="custom_amount_box">
              <label htmlFor="donation_custom_amount">$</label>
              <input ref={(input)=>{this.customAmountBox = input}} type="numeric" onFocus={this.clearOtherInputBox} id="donation_custom_amount"/>
            </div>
            <div className="comment_checkbox text-left">
              <input type="checkbox" id="comment_checkbox" checked={this.state.commentChecked} onChange={this.onChangeCommentBox}/>
              <label htmlFor="comment_checkbox">Write us a comment</label>
            </div>
            <div className="comment">
              <textarea name="donation_comment" ref={(input)=>{this.commentInput = input}} onChange={this.adjustInputHeight} className={this.state.commentChecked ? '' : 'hidden'} placeholder="Your comment"></textarea>
            </div>
            <div className="donation_type_box">
              <input type="radio" id='one_time_donation' defaultChecked name="donation_type" value="one_time"/>
              <label htmlFor='one_time_donation'>One-time</label>
              <input type="radio" id='monthly_donation' name="donation_type" value="monthly_donation"/>
              <label htmlFor='monthly_donation'>Monthly</label>
            </div>
            <input type="submit" className="btn" value="Donate"/>
          </div>
        </form>
      </div>
    )
  }
}

export default DonationForm;
