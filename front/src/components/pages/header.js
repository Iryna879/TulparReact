import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Menu from "../otherComponents/menu";

const  Header = (props) => {
    const {name, logo} = props;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/api/header")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setItems(res)
            })
            .catch(err =>
                console.log(err))
    })

    return (
        <header className={`container-fluid p-0 ${name}_fluid`}>
            <div className="container">
                <div className="row logo align-items-center  ">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6 ">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <Menu name={name} />
                </div>
                {
                    items
                        .filter(itemName => itemName.name === name)
                        .map(item =>
                                <div className="row">
                                    <div key={item._id} className={`col-12  ${name}_text`}>
                                        <h6>{item.heading}</h6>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                            )
                        }
            </div>
        </header>
   )

}
export default Header;