import React, { useState } from "react";
import '../App.css';


function Manufacture() {
  const [setActive] = useState("first");

  return (
    <>
    <button
  className="activeButton"
  onClick={() => {
    setActive("Risk Assessment");
  }}
>
Risk Assessment
</button>
<button
  className="activeButton"
  onClick={() => {
    setActive("Fire Door Inspection");
  }}
>
Fire Door Inspection
</button>
<button
  className="activeButton"
  onClick={() => {
    setActive("Area Safety And Health Assessment");
  }}
>
Area Safety And Health Assessment
</button>
    </>
  );
}
export default Manufacture;