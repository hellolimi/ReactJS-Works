import React from 'react';
import logo from './images/logo_darkbg.png';


function Footer(props){
    return(
        <footer>
            <h1>
                <img src={logo} alt="footer logo" />
            </h1>
            <p className="copyright">Copyright ⓒ 2021 by LimKim All right reserved</p>
        </footer>
    );
}

export default Footer;