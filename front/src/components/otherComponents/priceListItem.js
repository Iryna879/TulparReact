import React from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import '@inovua/reactdatagrid-community/index.css';

export function PriceListItem (props){
    const price = props.price;
    const columns = [
        {name: "name", header:"Назва послуги", minWidth:50, defaultFlex: 2},
        {name: "price", header:"Вартість", maxWidth: 1000, defaultFlex: 1}
    ];

    let mass = [];
    price.map(serv => {

        mass.push({id:serv._id, name: serv.title, price: serv.price});
    })


    const gridStyle = {minHeight: 550}

    return (
        <ReactDataGrid
            idProperty="id"
            columns={columns}
            dataSource={mass}
            style={gridStyle}
        />
    )
}
