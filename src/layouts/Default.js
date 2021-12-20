import React,{useState} from "react";
import PropTypes from "prop-types";
import Header from '../Components/Header';
import Footer from '../Components/Footer';


export default function DefaultLayout  ({ children, noNavbar, noFooter })  {
  
    return (
        <>
        <div className="maiDiv">
            <Header/>
            {children}
        </div>
        
        <Footer/>
        </>
    );
};

