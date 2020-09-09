import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition, Transition } from "react-transition-group";
import avatar1 from "../images/avatar-default.png"
import avatar2 from "../images/avatar-happy.png"
import avatar3 from "../images/avatar-content.png"

function Header() {
  let projects = useRouteMatch("/projects")
  let contact = useRouteMatch("/contact")
  let home = useRouteMatch({
    path: '/',
    exact: true
  })

  return (
    <header>
          <Link to="/" id="home-link">{home? <h1><span className="selected">♥</span>alexandra radevich<span className="heart-placeholder">♥</span></h1> : <h1><span className="heart-placeholder">♥</span>alexandra radevich<span className="heart-placeholder">♥</span></h1>}</Link>
          <div id="nav-wrapper">
          <nav>
          <div className="link-container">
              <Link className="link" to="/projects">{projects ? <><span className="selected">♥</span>Projects<span className="heart-placeholder">♥</span></> : <><span className="heart-placeholder">♥</span>Projects<span className="heart-placeholder">♥</span></>}</Link> 
          </div>
          <div className="link-container">
              <img id="avatar" alt="cartoony avatar with blonde hair, grey crewneck on mint green background" src={ home ? avatar2 : contact ? avatar1 : avatar3 }></img>
          </div>
          <div className="link-container">
              <Link className="link" to="/contact">{contact ? <><span className="selected">♥</span>Contact<span className="heart-placeholder">♥</span></> : <><span className="heart-placeholder">♥</span>Contact<span className="heart-placeholder">♥</span></>}</Link> 
          </div>
          </nav>
          </div>
    </header>
  );
}

export default Header;