import React, {useState, useEffect} from "react";
import "./../../style/whatIsBlock.css";


const  WhatIsBlock = (props) => {
    const {name} = props;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/whatIsBlocks")
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
        items.map(item => {if(item.name == name){
            return (
                <div className="container-fluid p-0 centerInfo" style={{'backgroundImage': `url(${"http://localhost:3001" + item.background})`}}>
                    <div className="container">
                        <div className="row  ">
                            <div className="col-xl-6 offset-xl-3">
                                <div className="textAboutCenter">
                                    <h6>{item.header}</h6>
                                    <p>{item.paragraphOne}</p>
                                    <p>{item.paragraphTwo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        })
    )

}
export default WhatIsBlock;