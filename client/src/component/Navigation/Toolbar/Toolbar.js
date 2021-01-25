import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import Facebook from '../../Facebook';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
            <Logo />
            <h1 className="text-white">Avenue</h1>
            <button className="btn btn-danger text-white m-4" onClick={props.newbtn}>New</button>
            <button className="btn btn-danger text-white" onClick={props.logoutbtn}>Log out</button>
<<<<<<< HEAD
            <button className="btn btn-danger text-white m-4" onClick={props.signbtn}>Add Signature</button>
=======
            <Facebook />
            
>>>>>>> c352ff4ec9dc0dafca4bcad84a0961376f29aefb
        </nav>
    </header>
);

export default toolbar;