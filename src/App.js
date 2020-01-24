import React, { useEffect } from "react";
import HeaderBar from "./components/Header";
import ColorChangeButton from "./components/ColorChangeButton";

function App() {
  const [colorIndex, setColorIndex] = React.useState(1);
  const colors = [
    "CornflowerBlue",
    "DarkSeaGreen",
    "PaleGoldenRod",
    "IndianRed"
  ];

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colors, colorIndex]);

  function handleColorChange() {
    const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  return (
    <div className="App">
      <HeaderBar color={colors[colorIndex + 1]} />
      <main>
        <ColorChangeButton colorChanged={handleColorChange}></ColorChangeButton>
      </main>
    </div>
  );
}

export default App;
