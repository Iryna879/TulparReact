import React, {useEffect, useState} from "react";


export function PriceListItem (props){
    const price = props.price;
const title = price.map(p =>
    <li key={p.id}>{p.title}</li>
)
    const priceLi = price.map(p =>
        <li key={p.id}>{p.price}</li>
    )

return (
    <ul className="gridServices">
        <li>Назва послуги</li>
        <li>Вартість</li>
        <li>Назва послуги</li>
        <li>Вартість</li>
        {title}
        {priceLi}
    </ul>
)
}