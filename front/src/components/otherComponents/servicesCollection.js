
import React, {useEffect, useState} from "react";
import {IndexHeader} from "./indexHeader";
import {ServiceItem} from "./serviceItem";


export function ServicesCollection () {

const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/services")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setServices(res)
            })
            .catch(err =>
                console.log(err))
    })
console.log(services);
    return ( <div>
        {services.title}  </div>
    )
}

/*
export class ServicesCollection extends React.Component {
    constructor() {
        super();
        this.state = {
            services: []
        }
    }
    retServ = () => {
        fetch("http://localhost:3001/api/services")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                this.setState({services: res})
            })
            .catch(err =>
                console.log(err))
    }

    render () {
        return (
            <IndexHeader retServ={this.retServ()}/>
        )
    }
}*/
