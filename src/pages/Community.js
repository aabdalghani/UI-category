import React, { useState } from "react";
import '../App.css';


function Community() {
  
  const [setActive] = useState("first");

  return (
    <>
    <button
  className="activeButton"
  onClick={() => {
    setActive("Traffic management plan");
  }}
>
Traffic management plan
</button>
<button
  className="activeButton"
  onClick={() => {
    setActive("Gym Inspection");
  }}
>
Gym Inspection
</button>
<button
  className="activeButton"
  onClick={() => {
    setActive("Employee Appraisal");
  }}
>
Employee Appraisal
</button>
    </>
  );
}
export default Community;