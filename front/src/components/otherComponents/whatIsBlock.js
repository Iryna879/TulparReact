import React, {useState, useEffect} from "react";
import "./../../style/whatIsBlock.css";


const  WhatIsBlock = (props) => {
    const {name} = props;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/api/whatIsBlocks")
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
    }, [])

    return (
        items
            .filter(itemName => itemName.name === name)
            .map (item =>
                <div className="container-fluid p-0 centerInfo" style={{'backgroundImage': `url(${"http://localhost:3001" + item.background})`}}>
                    <div className="container">
                        <div className="row  ">
                            <div className="col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-6 offset-3">
                                <div key={item._id} className="textAboutCenter">
                                    <h6>{item.header}</h6>
                                    <p>{item.paragraphOne}</p>
                                    <p>{item.paragraphTwo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    )
}
export default WhatIsBlock;