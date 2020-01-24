import React from "react";

const ColorChangeButton = props => {
  return <button onClick={props.colorChanged}>Change background</button>;
};

export default ColorChangeButton;
