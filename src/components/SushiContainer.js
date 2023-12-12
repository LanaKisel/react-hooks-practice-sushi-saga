import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiRolls, onEatSushi, credit }) {

  const [startIndex, setStartIndex] = useState(0);

  const newSushi = sushiRolls
    .slice(startIndex, startIndex + 4)
    .map((sushi) => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} credit={credit} />)

  function handleClick() {
    setStartIndex(startIndex + 4)
  }

  return (
    <div className="belt">
      {newSushi}
      <MoreButton startIndex={startIndex} onClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
