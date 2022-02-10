import React, {useEffect, useState} from "react";
import {PriceListItem} from "./priceListItem"

export function PriceList (){

    const [price, setPrice] = useState([]);

    useEffect(() => {
        fetch("/api/services")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setPrice(res)
            })
            .catch(err =>
                console.log(err))
    })

    return (
        <div className="container">
            <div className="row  ">
                <div className="col-xl-12 priceList">
                    <h6>Прайс лист</h6>
                        <PriceListItem price={price}/>
                </div>
            </div>
        </div>
       )


}