import React from "react";
/*import "./../../style/specialists.css";*/


export function  InfoSpecialists (props)  {
  const specialist = props.specialist;
  const emp = props.selected;
  return(  specialist
          .filter(sId => sId._id === emp )
          .map(s =>
                <div key={s._id} className="specialistInfo">

                    <p>{s.name + " " + s.surname}</p>
                    <ul className="gridSpecialistInfo">
                        <li>Прізвище/Iм'я:</li>
                        <li>{s.name + " " + s.surname}</li>
                        <li>Посада:</li>
                        <li>{s.jobTitle}</li>
                        <li>Спеціалізація:</li>
                        <li>{s.specialization}</li>
                        <li>Кар'єра:</li>
                        <li>
                            <ul className="career">
                                {s.career.split(",").map(cm =>
                                    <li>{cm}</li>
                                )}
                            </ul>
                        </li>
                        <li>Наукова діяльність:</li>
                        <li>
                            <ul className="activity">
                                {s.activity.split(",").map(am =>
                                    <li>{am}</li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div> )
  )
}

