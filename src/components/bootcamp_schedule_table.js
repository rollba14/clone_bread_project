import React from 'react';

const Bootcamp_Schedule = () => {
  return(
    <div className="bootcamp_schedule light_blue_bg">
      <div className="mx-auto px-1 py-5">
        <h5 className="mild_blue_text">Upcoming Bakery Bootcamps</h5>
        Bakery Production Bootcamps run each month beginning in September all way the through June of the following year.
      </div>
      <table className="table table-sm text-muted">
        <thead>
         <tr>
           <th >Bootcamp Cohort</th>
           <th colspan="2">Training Start Date</th>
           <th >Mock Interview (Friday)</th>
           <th >Graduation & End Date (Fridays)</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018-001</td>
            <td>Tues</td>
            <td>9/4/2018</td>
            <td>9/14/2018</td>
            <td>9/21/2018</td>
          </tr>
          <tr>
            <td>2018-002</td>
            <td>Tues</td>
            <td>10/2/2018</td>
            <td>10/12/2018</td>
            <td>10/19/2018</td>
          </tr>
          <tr>
            <td>2018-003</td>
            <td>Tues</td>
            <td>10/30/2018</td>
            <td>11/9/2018</td>
            <td>11/16/2018</td>
          </tr>
          <tr>
            <td>2018-004</td>
            <td>Tues</td>
            <td>11/27/2018</td>
            <td>12/7/2018</td>
            <td>12/14/2018</td>
          </tr>
          <tr>
            <td>2018-005</td>
            <td>Mon</td>
            <td>1/14/2019</td>
            <td>1/25/2019</td>
            <td>2/1/2019</td>
          </tr>
          <tr>
            <td>2018-006</td>
            <td>Mon</td>
            <td>2/11/2019</td>
            <td>2/22/2019</td>
            <td>3/1/2019</td>
          </tr>
          <tr>
            <td>2018-007</td>
            <td>Tues</td>
            <td>3/12/2019</td>
            <td>3/22/2019</td>
            <td>3/29/2019</td>
          </tr>
          <tr>
            <td>2018-008</td>
            <td>Tues</td>
            <td>4/9/2019</td>
            <td>4/19/2019</td>
            <td>4/26/2019</td>
          </tr>
          <tr>
            <td>2018-009</td>
            <td>Tues</td>
            <td>5/7/2019</td>
            <td>5/17/2019</td>
            <td>5/24/2019</td>
          </tr>
          <tr>
            <td>2018-010</td>
            <td>Tues</td>
            <td>6/4/2019</td>
            <td>6/14/2019</td>
            <td>6/21/2019</td>
          </tr>
          <tr>
            <th colspan="5">
            10 Bootcamps Projected for FY19 Graduations are on Fridays, Starting at 12pm</th>
          </tr>
            <td></td>
        </tbody>
      </table>
      <div className="mx-auto px-5 pt-2 pb-5">
					<p>Questions? Contact our program staff at <a href="#" className="mild_blue_text">510.594.1702</a> or email us at <a href="#" className="mild_blue_text">program@breadproject.org</a>.
          <br/>We are happy to help you!</p>
				</div>
    </div>
  )
}

export default Bootcamp_Schedule;
