import * as React from "react";
import "./App.css";

import { output as html } from "./examples/rendered-markup/html-example";
import { output as md } from "./examples/rendered-markup/markdown-example";
import { output as text } from "./examples/interpolated-values/text-example";
import { ParticularForm as Pickles } from "./examples/bound-form/particular-form-example";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div style={{ margin: "2rem", fontSize: "1.5rem" }}>
          <h4>
            Using nodes and generators to render the same output to different
            formats
          </h4>
          {html.outerHTML}
        </div>
        <div style={{ margin: "2rem", fontSize: "1.5rem" }}>
          {md.replace(/\n/g, "\\n")}
        </div>
        <div style={{ margin: "2rem", fontSize: "1.5rem" }}>
          <h4>Using nodes and generators to interpolate text based on state</h4>
          {text}
        </div>
        <div style={{ margin: "2rem", fontSize: "1.5rem" }}>
          <h4>Using nodes and generators to bind to custom forms</h4>
          <Pickles />
        </div>
      </div>
    );
  }
}

export default App;
