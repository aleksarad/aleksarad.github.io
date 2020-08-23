import React from 'react';
import { Link, useRouteMatch} from 'react-router-dom';
import avatar from "../images/avatar2.png"

function Header() {
  let projects = useRouteMatch("/projects")
  return (
    <header>
        <h1>alexandra radevich</h1>
        <nav>
        <div className="link-container">
        { projects ? 
            <Link to="/">home</Link> : 
            <Link to="/projects">projects</Link> 
        }
        </div>
        <div className="link-container">
          <img id="avatar" src={avatar}></img>
        </div>
        <div className="link-container">
          <a href="">contact</a>
        </div>
        </nav>
    </header>
  );
}

export default Header;