import React from "react";
import { useNavigate } from 'react-router-dom';

const QueryForm = (props) => {
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        navigate('/home')
    }
    return (
        <div className="queryform">
            <a href=""  style={{"fontSize": "24px", "margin": "2rem 0"}}>Respond to the query here</a>

            <form className="mt-4">
                <div className="form-group row">
                    <label for="query" className="col-2 col-form-label col-form-label-lg">Query</label>
                    <div className="col-8">
                    <textarea class="form-control" id="query" rows="3"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="response" className="col-sm-2 col-form-label col-form-label-lg">Response</label>
                    <div className="col-8">
                        <input type="text" className="form-control form-control-lg" id="response" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="file" className="col-sm-2 col-form-label col-form-label-lg">Image</label>
                    <div className="col-8">
                        <input type="file" className="form-control form-control-lg" id="file" />
                    </div>
                </div>
                <div className=" col-4 col-offset-6 loginButton">
                    <button className="btn btn-md btn-secondary " onClick={onLogin}>Cancel</button>
                    <button className="btn btn-md btn-primary post" onClick={onLogin}>Post</button>
                </div>
            </form>
        </div>
    )
}

export default QueryForm;