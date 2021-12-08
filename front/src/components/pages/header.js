import React, {useState, useEffect} from "react";


const  Header = (props) => {
    const {name} = props;
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
            <header className="container-fluid p-0">
                <div className="container">
                    <div className="row  ">
                        <div className="col-xl-3  logo">
                            <a href="#"><img src="../img/logoRed.png" alt="alt"></a>
                        </div>
                        <div className="col-xl-6 offset-3">
                            <ul className="menu">
                                <li><a href="../index.html">Головна</a></li>
                                <li><a href="#">Наші послуги</a></li>
                                <li><a href="#">Звіти</a></li>
                                <li><a href="contact.html">Про нас</a></li>
                                <li><a href="#">Новини</a></li>
                                <li><a href="#">УКР</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-12  servText">
                            <h6>Наші послуги</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the</p>
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
       // if (i.name == name) {
           // return (
               // <div className="col-5 ">

              //  </div>
           // )
       // } else {
          //  return (<div>No found name</div>)
      //  }
   // }
}
export default Header;