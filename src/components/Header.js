import { css, jsx } from "@emotion/core";

export default function HeaderBar(props) {
  let text = props.color === "PaleGoldenRod" ? " black" : "white";

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
      align-items:center;
      margin-bottom:5%;
      h1 {

        font-size: 3.5em;
        font-family: 'Pacifico', cursive;
        text-shadow: 7px 6px 0 #00000061;
        color: ${text};
        &:hover {
          color:pink;
        }
      `}
    >
      <div id="nav-icon3">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>React Tutorial</h1>
    </nav>
  );


}
