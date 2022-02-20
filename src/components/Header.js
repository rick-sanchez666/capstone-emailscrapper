import React, { useContext } from "react";
import LoginContext from "../Auth";
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        props.onLogout(false);
        navigate('/')
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <div className={`container-fluid ${classes.mynavbar}`}>
                <a className="navbar-brand" href="#">
                    <img src="/logo.png" alt="" width="60" height="60" className="d-inline-block align-text-top" />
                </a>
                <div className="text-white" style={{"marginRight":"auto"}}>NORTHWEST MISSOURI STATE UNIVERSITY</div>
                <div className="text-white">Email Scrapper</div>
                {
                    loginContext && 
                <div><button className="btn btn-sm text-light" style={ {"marginLeft":"1rem"}} onClick={logout}> Logout</button></div>

                }
            </div>
        </nav>
    )
}

export default Header;