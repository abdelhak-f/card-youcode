import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bgimage from '../../images/youcode1.jpg'

class Landing extends Component {
  render() {
    return (
      <div style={{
         height: "89vh", 
         backgroundImage: `url(${Bgimage})`, 
         opacity : 1,
      //  backgroundPosition: 'center',
         backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat' 
      }} className=" valign-wrapper ">
        
        <div className="row">
          <div className="col s12 center-align">
            <h4>
               
            </h4>
            <p className="flow-text white-text text-darken-1 upercase">
              <b>Welcome to Youcode, You Can Loged To Your Profile</b>
            </p>
            <br />
            <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect blue black-text"
              >
                Log In
              </Link>
          </div>
        </div>
      </div>
    );
  }
}
// INline style line
// const style = {
//   countainer:{
//     <div class="card text-white bg-primary">
//       <img class="card-img-top" src="holder.js/100px180/" alt="">
//       <div class="card-body">
//         <h4 class="card-title">Title</h4>
//         <p class="card-text">Text</p>
//       </div>
//     </div>
//   }
// }

export default Landing;
