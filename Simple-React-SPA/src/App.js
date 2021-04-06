import React from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Sub from './Sub';
import './css/common.css';
import logo from './images/logo.png';

function App() {
  return (
    <>
      <header>
            <div className="wrap">
              <h1>
                  <Link to="/">
                      <img src={logo} alt="logo" />
                  </Link>  
              </h1>
              <ul>
                  <li><Link to="/sub/html">HTML</Link></li>
                  <li><Link to="/sub/css">CSS</Link></li>
                  <li><Link to="/sub/js">JavaScript</Link></li>
                  <li><Link to="/sub/react">React</Link></li>
              </ul>
            </div>
        </header>
        <Route path="/" exact={true} component={Main} />
        <Route path="/sub/:lang" component={Sub} />
      <Footer />
    </>
  );
}

export default App;
