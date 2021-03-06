import React from "react";

export function ServiceItem (props){
  const services = props.services;
  const department = props.department;

  let mass = [];
    services.forEach(serv => {if(serv.department === department){
        mass.push(serv.title);
    }
    })
    let title = mass.slice(0,4);


    return (
        <ul className="services">
                        {
                            title.map((t,index) => {
                                    return(
                                        <li key={index}>{t}</li>
                                    )
                        })
                        }
                    </ul>
                   )
}