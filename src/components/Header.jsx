import React from 'react';
import { Link, useRouteMatch, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition } from "react-transition-group";
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
      <TransitionGroup component={null}>
        <CSSTransition classNames="selected" timeout={300}>
          <Link to="/" id="home-link">{home? <h1><span className="selected">♥</span>alexandra radevich</h1> : <h1>alexandra radevich</h1>}</Link>
          </CSSTransition>
          <div id="nav-wrapper">
          <nav>
          <div className="link-container">
              <Link className="link" to="/projects">{projects ? <><span className="selected">♥</span>Projects</> : 'Projects'}</Link> 
          </div>
          <div className="link-container">
              <img id="avatar" src={ home ? avatar2 : contact ? avatar1 : avatar3 }></img>
          </div>
          <div className="link-container">
              <Link className="link" to="/contact">{contact ? <><span className="selected">♥</span>Contact</> : 'Contact'}</Link> 
          </div>
          </nav>
          </div>
        </TransitionGroup>
    </header>
  );
}

export default Header;