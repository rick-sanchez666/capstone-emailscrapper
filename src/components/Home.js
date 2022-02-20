import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        navigate('/query')
    }
    return (
        <div className="homepage">
            <div className="d-flex text-center sec1" >
                <a href="#">Frequently asked questions</a>
                <button className="btn btn-md btn-primary" onClick={onLogin}>Post</button>
                <button className="btn btn-md btn-primary">Analysis</button>
            </div>
            <div className="text-center sec2">
                <input type="text" className="form-control form-control-lg"  placeholder="Enter your query here" />
                <button className="btn-md btn btn-primary">Search</button>
            </div>
            <section className="issues">
                <h5>Set of issues based on categories</h5>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Login
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Grade Book
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;