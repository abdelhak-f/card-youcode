import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper  blue col s6">
            
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              Youcode
            </Link>
         
              {/* <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginLeft: "85%"
                }}
                className="btn btn-large waves-effect waves-light hoverable  accent-3"
              >
                Log In
              </Link> */}
        
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar;
