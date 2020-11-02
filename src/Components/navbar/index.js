import React from 'react';
import LOGO from "../../images/logo-2.png";
import '../navbar/header.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div id="header">
            <div className="container">
            <div className="left-side">
            

            <div id="logo">
                <a href="/"><img src={LOGO} data-sticky-logo={LOGO} data-transparent-logo={LOGO} alt=""/></a>
            </div>


            <nav id="navigation">
                <ul id="responsive">

                    <li><Link to="/" className="current">Home</Link>
                    </li>

                    <li><a>Services</a>
                        <ul className="dropdown-nav">
                            <li><Link to="/services/domicile-certificate">Domicile Certificate</Link>
                            </li>
                            <li><Link to="/services/income-certificate">Income Certificate</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/about-us">About Us</Link>
                    </li>

                    <li><Link to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <div className="clearfix"></div>


            </div>
            </div>
            </div>

             <header id="mobile-container" className="fullwidth">


            <div id="mobile-header">
                <div className="container-main">
                <div className="inner-m-header line-height-html">
                    <div className="inner-container d-flex justify-content-start align-items-center">

                    <div className="left-side d-flex justify-content-center  align-item-center">
                        <span>
                            <i className="icon-material-outline-keyboard-arrow-left"></i>
                            
                            <i className="icon-feather-menu mmenu-trigger padding-right-10"></i>
                        </span>
                    </div>
                    <div className="center d-flex justify-content-center  align-item-center margin-left-45">
                        <a href="<?php echo $host_dir;?>/index.php">
                            <h3 className="mobile-header-heading">MakeMyDocument
                            </h3>
                        </a>
                    </div>
                    <div className="right-side">

                    </div>


                
                </div>
            </div>
            </div>

            </div>
            </header>
            <div className="clearfix"></div> 
        </>
    )
}

export default Navbar;
