/*
import React, {useEffect, useState} from "react";


export function PriceListItem (props){
    const price = props.price;
/!*const title = price.map(p =>
    <li key={p.id}>{p.title}</li>
)
    const priceLi = price.map(p =>
        <li key={p.id}>{p.price}</li>
    )
const li = price.map(p =>
    <ul>
        <li key={p.id}>{p.title}</li>
    <li key={p.id}>{p.price}</li>
    </ul>
)*!/
    /!*<li>Назва послуги</li>
    <li>Вартість</li>
    <li>Назва послуги</li>
    <li>Вартість</li>*!/
return (
    /!*<table className="gridServices">
            <tr>

                {price.map(p =>
                    <td key={p.id}>{p.title}</td>)}

            </tr>
        <tr>

            {price.map(p =>
                <td key={p.id}>{p.price}</td>)}

        </tr>
    </table>*!/
    <ul className="gridServices">
        <li>Назва послуги</li>
        <li>Вартість</li>
        <li>Назва послуги</li>
        <li>Вартість</li>
        {
    price.map((p) =>

            <li key={p.id}>{p.title} </li>
        <li>{p.price} </li>

    )
        }
    </ul>

)
}*/
