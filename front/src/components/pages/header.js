import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";


const  Header = (props) => {
    const {name, logo} = props;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/header")
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
            <header className={`container-fluid p-0 ${name}_fluid`}>
                <div className="container">
                    <div className="row  ">
                        <div className="col-xl-3 ">
                            <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                        </div>
                        <div className="col-xl-6 offset-3">
                            <ul className={`${name}_menu`}>
                                <li><Link to="/">Головна</Link></li>
                                <li><Link to="/services">Наші послуги</Link></li>
                                <li><Link to="/reports">Звіти</Link></li>
                                <li><Link to="/contact">Про нас</Link></li>
                                <li><Link to="/news">Новини</Link></li>
                                <li>УКР</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className={`col-xl-12  ${name}_text`}>
                            <h6>{item.heading}</h6>
                            <p>{item.paragraph}</p>
                        </div>
                    </div>

                </div>
            </header>
         )
    }/*else {
          return (<div>No found name</div>)
         }*/

    })
   )

}
export default Header;