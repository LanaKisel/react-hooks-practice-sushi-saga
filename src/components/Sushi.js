import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, credit }) {
  const [consumption, setConsumption] = useState(false);

  function handleClick(e) {
    if (credit >= sushi.price) {
      if (!consumption) {
        setConsumption(true)
        onEatSushi(sushi)
      }
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {consumption ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
