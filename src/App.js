import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  
  return (
    <>
    <HashRouter basename='/'>
      <Header/>
      <main>
        <div id="content-wrapper">
          <Route
            exact
            path="/"
            render={() => (<Home/>)
          }/>
          <Route
            path="/projects"
            render={() => (<Projects/>)
          }/>
          <Route
            path="/contact"
            render={() => (<Contact/>)
          }/>
          </div>
          <Footer/>
      </main>
    </HashRouter>
    </>
  );
}

export default App;
