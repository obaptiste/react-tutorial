import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import axios from "axios";

export default function Footer(props) {
  const [apiColor, setApiColor] = useState("DarkOrange");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=1"
        )
        .then(res => setApiColor(res.data.colors[0].hex.value))
        .catch(error => console.log(error));
    }, 3000);
  }, []);

  return (
    // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
    /** @jsx jsx */
    <nav
      css={css`
        background-color: ${apiColor};
        position: fixed;
        bottom: 0;
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
      `}
    ></nav>
  );
}
