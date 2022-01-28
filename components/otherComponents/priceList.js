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
                    {/*<ul className="menuPrice">
                        <li>Показати всі</li>
                        <li>Кардіо</li>
                        <li>Травми</li>
                        <li>Дерматологія</li>
                        <li>Урологія</li>
                        <li>УЗД</li>
                    </ul>*/}

                        <PriceListItem price={price}/>

                </div>
            </div>
        </div>
       )


}