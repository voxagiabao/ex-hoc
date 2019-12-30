import React from "react";

import "./App.css";
import AwesomeImage from "./components/AwesomeImage";
import withGrayScale from "./components/withGrayScale";

const HoverOpacityAwesomeImage = withGrayScale(AwesomeImage, 1);

function App() {
  return (
    <div className="App">
      <HoverOpacityAwesomeImage src="https://picsum.photos/200/300" />
    </div>
  );
}

export default App;
