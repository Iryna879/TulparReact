import React from "react";
import "./../../style/page404.css";
import {Link} from "react-router-dom";


const  Page404 = () => {

    return (
        <section id="wrapper" className="container-fluid">
            <div className="error-box">
                <div className="error-body text-center">
                    <h1 className="text-danger">404</h1>
                    <h3>Page Not Found !</h3>
                    <p className="text-muted m-t-30 m-b-30">MOST LIKELY THE PAGE YOU ARE LOOKING FOR THERE</p>
                    <Link to="/" className="btn btn-danger btn-rounded m-b-40">Back to home</Link> </div>
            </div>
        </section>
    )
}
export default Page404;