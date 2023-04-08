import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import logo from '../logo.png';

function Header(props: any) {
    return (
        <div className="row">
            <div className="col-4">
                <img src={logo} alt="logo" className="img-fluid"></img>
            </div>
            <div className="col-8">{props.slogan}</div>
        </div>
    );
}

export default Header;
