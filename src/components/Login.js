import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    const onLogin = (e) => {
        e.preventDefault();
        props.onLogin(true);
        navigate('/home');

    }
    return (
        <div className="loginform">
          
            <form>
                <div className="form-group row">
                    <label for="userId" className="col-4 col-form-label col-form-label-lg">User ID</label>
                    <div className="col-8">
                        <input type="userId" className="form-control form-control-lg" id="userId" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="password" className="col-sm-4 col-form-label col-form-label-lg">Password</label>
                    <div className="col-8">
                        <input type="password" className="form-control form-control-lg" id="password" />
                    </div>
                </div>
                <div className="text-center col-8 col-offset-2 loginButton">
                    <button className="btn btn-md btn-primary" onClick={onLogin}>Login</button>
                </div>
            </form>
        </div>

    )
}

export default Login;