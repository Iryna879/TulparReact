import React, {useState, useEffect} from "react";
import "./../../style/recommend.css";


export function Recommend () {

    const [recommends, setRecommends] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/api/recommends")
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(res => {
                // console.log(res)
                setRecommends(res)
            })
            .catch(err =>
                console.log(err))
    })

    return (

            <div className="row  ">
                <div className="col-xl-12  recommend">
                    <h6>Нас рекомендують</h6>
                    <ul>
                        {
                     recommends.map(recom =>

                      <li><img src={"http://localhost:3001" + recom.img} alt={recom.name}/></li>
                     )
                        }
                    </ul>
                </div>
            </div>

        )

}
export default Recommend;