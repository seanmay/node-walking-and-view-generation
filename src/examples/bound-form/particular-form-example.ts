import { Component } from "react";

import { GeneratedFormContent } from "./form-example";

import { nodes } from "./input-nodes";


export class ParticularForm extends Component {
  state = {
    formData: {
      product: "PanGalactic Gargle Blaster",
      count: 9,
      total: 10,
      professionals: "zaphods",
      subscribe: "slightly less affirmative"
    },
    config: {
      professionals: {
        options: [
          { text: "Galactic Presidents", value: "zaphods" },
          { text: "Hitchhikers", value: "fords" }
        ]
      },
      subscribe: {
        options: [
          { text: "Sign my life away, right now!", value: "affirmative" },
          { text: "...maybe next time", value: "slightly less affirmative" }
        ]
      }
    }
  };

  updateForm = ({ field, value }: any) => this.setState((state: any) => ({
    ...state,
    formData: {
      ...state.formData,
      [field]: value
    }
  }));

  render() {
    return GeneratedFormContent({
      nodes,
      onChange: this.updateForm,
      formData: this.state.formData,
      config: this.state.config
    });
  }
}