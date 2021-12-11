import React, {useEffect, useState} from "react";
import {ServicesCollection} from "./servicesCollection";

export function ServiceItem (props){
  const services = props.services;
  const department = props.department;

  let mass = [];
    services.map(serv => {if(serv.department == department){
        mass.push(serv.title);
    }})
    let title = mass.slice(0,4);


    return (
        <ul className="services">
                        {
                            title.map(t => {
                                return (
                                    <li key={t.id}>{t}</li>
                                )
                            })
                        }
                    </ul>
                   )
}