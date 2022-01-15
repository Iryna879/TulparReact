import React, {useEffect, useState} from "react";
import "./../../style/specialists.css";


export function  InfoSpecialists (props)  {
  const specialist = props.specialist;
  const emp = props.selected;
  let fullName = "";
  let job = "";
  let department = "";
  let career = "";
      let activity = "";
  let careerMass = []; let activityMass = [];
  specialist.map(s => {
      if (s._id === emp) {
          fullName = s.name + " " + s.surname;
          job = s.jobTitle;
          department = s.specialization;
          career = s.career;
          activity = s.activity;
      }
  }
  )
    careerMass = career.split(",");
    activityMass = activity.split(",");

    return (
        <div className="specialistInfo">

            <p>{fullName}</p>
            <ul className="gridSpecialistInfo">
            <li>Прізвище/Iм'я:</li>
            <li>{fullName}</li>
            <li>Посада:</li>
            <li>{job}</li>
            <li>Спеціалізація:</li>
            <li>{department}</li>
            <li>Кар'єра:</li>
            <li>
            <ul className="career">
                {careerMass.map(cm =>
                    <li>{cm}</li>
                )}
            </ul>
            </li>
            <li>Наукова діяльність:</li>
            <li>
            <ul className="activity">
                {activityMass.map(am =>
                    <li>{am}</li>
                )}
            </ul>
            </li>
            </ul>
        </div>
    )

}
