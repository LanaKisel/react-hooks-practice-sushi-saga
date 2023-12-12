import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiRolls, setSushiRolls] = useState([]);
  const [emptyPlates, setEmptyPlates] = useState([]);

  const startMoney = 100;
  const [money, setMoney] = useState(startMoney);

  useEffect(() => {
    if (emptyPlates.length > 0) {
      setMoney(startMoney - emptyPlates.reduce((accumulator, plate) => {
        return accumulator + plate.price
      }, 0))
    }
  }, [emptyPlates])



  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setSushiRolls(data))
  }, [])

  function handleClick(sushi) {
    const updatedPlate = [...emptyPlates, sushi];
    setEmptyPlates(updatedPlate)
  }



  return (
    <div className="app">
      <SushiContainer sushiRolls={sushiRolls} onEatSushi={handleClick} credit={money} />
      <Table plates={emptyPlates} credit={money} />
    </div>
  );
}

export default App;
