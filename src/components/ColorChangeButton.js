import React from "react";
import styled from "@emotion/styled";

const ColorChangeButton = props => {
  const Button = styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #646464;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    &:hover {
      cursor: pointer;
    }
  `;

  return <Button onClick={props.colorChanged}>Change background</Button>;
};

export default ColorChangeButton;
