
// import axios from 'axios';
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

//  constructor(props) {
//         super(props);
//         this.state = { usersCollection: [] };
//     }
//  componentDidMount() {
//         axios.get('http://localhost:4000/users')
//             .then(res => {
//                 this.setState({ usersCollection: res.data });
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }
// dataTable() {
//         return this.state.usersCollection.map((data, i) => {
//             return <DataTable obj={data} key={i} />;
//         });
//     }

  
  render() {
   const { user } = this.props.auth;
  
       console.log(user)
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> 
              {user.nom.split(" ")[0]}
              {/* {user.name.split(" ")[0]} */}
              {/* {user.prenom.split(" ")[0]} */}

              <p className="flow-text grey-text text-darken-1">
              you can print your{" "}
                <span style={{ fontFamily: "monospace" }}>youcoder</span> card 👏
              </p>
              </h4>
              {/* <div className="user-details">
                 
                      <tr>
                       <td>Username: </td>
                       <td>{user.name}</td>
                      </tr> */}

                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Imatriculation</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Télephone</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tr>
                        <td>{user.id}</td>
                        <td >{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.phone}</td>
                        <td>{user.adresse}</td>
                        <td>{user.email}</td>
                      {/* {this.dataTable()} */}
                    </tr>
                  </table>

              {/* </div> */}
            
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
