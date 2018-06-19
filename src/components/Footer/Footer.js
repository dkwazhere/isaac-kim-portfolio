import React, { Component } from "react";
import "./Footer.css";
import { CardFooter } from "reactstrap";



class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <CardFooter className="white">©Copyright 2018. All rights reserved. Powered by Randall Ishino & David Kim</CardFooter>
            </div>
        )
    }
}

export default Footer;
