import React from "react";
import { css, jsx } from "@emotion/core";

export default function HeaderBar(props) {
  let text = props.color === "yellow" ? " black" : "white";

  return (
    // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
    /** @jsx jsx */
    <nav
      css={css`
      background-color: ${props.color};
      height:100px;
      width:100%;
      display: flex;
      justify-content: center;
      margin-bottom:5%;
      h1 {
        font-size: 18px;
        margin-top:5%;
        color: ${text};
        &:hover {
          color:pink;
        }
      `}
    >
      <h1>React Tutorial</h1>
    </nav>
  );
}
