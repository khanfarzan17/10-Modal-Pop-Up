import React, { useState } from "react";
import Popup from "./Popup";

function Modaltest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleShowModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };
  return (
    <div>
      <button onClick={handleShowModalPopup}>
        open Modal Pop Up
        {showModalPopup && <Popup body={<div> Customise Component</div>} />}
      </button>
    </div>
  );
}

export default Modaltest;
