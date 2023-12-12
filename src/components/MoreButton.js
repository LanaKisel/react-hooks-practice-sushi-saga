import React from "react";

function MoreButton({ onClick }) {

  function handleClick() {
    onClick()
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
