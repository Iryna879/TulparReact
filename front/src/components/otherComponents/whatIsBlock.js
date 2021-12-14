import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";


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

            )
        }

        })
    )

}
export default WhatIsBlock;