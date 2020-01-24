import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderBar from "./components/Header";
import Footer from "./components/Footer";
import ColorChangeButton from "./components/ColorChangeButton";
import Home from "./pages/Home";
import About from "./pages/About";

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
    <div>
      <div className="App">
        <HeaderBar color={colors[colorIndex + 1]} />
        <main
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ColorChangeButton
            colorChanged={handleColorChange}
          ></ColorChangeButton>
        </main>

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
