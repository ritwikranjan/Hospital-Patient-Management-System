import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  
  render() {
    return (
      <div>
        <div class="header row">
            <div class="col-md-4 p1">
            <Link to="/">
                <div class="logo">

                </div>
            </Link>
            </div>
            <div class="col-md-8 p2">
                <div class="nav1">
                    <Nav id="mr-auto">

                              <Link class="link" to="/"> HOME </Link>
                              <Link class="link" to="/about-us"> ABOUT US </Link>
                              <Link class="emergency" to="/emergency">
                                  EMERGENCY 24x7
                              </Link>
                              <Link class="link" to="/login"> LOGIN </Link>
                              <Link style = {{ marginRight: "15px" }} class="link" to="/contact-us"> CONTACT US </Link>

                    </Nav>
                </div>
                <div class="nav2">
                    <Navbar id="mr-auto2">
                            <Link class="link" to="/appointment"><div class="appointment"></div> APPOINTMENTS </Link>
                            <Link class="link" to="/reports"><div class="reports"></div> LAB REPORTS </Link>
                            <Link class="link " to="/doctor"><div class="doctor"></div> FIND A DOCTOR </Link>
                            <Link class="link " to="/queries"><div class="queries"></div> QUICK QUERIES </Link>
                     </Navbar>
                </div>

            </div>

        </div>

      </div>
    );
  }
}
export default Header;