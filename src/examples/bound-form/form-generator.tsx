import * as React from "react";

import { ROOT, INPUT, SELECT, RADIO, TEXT } from "./features";

export const generators = {
  [ROOT]: (node, children) => <section>{children}</section>,
  [INPUT]: (node, children, parent, state) => (
    <input
      type={node.attr.type}
      name={node.attr.name}
      placeholder={node.attr.placeholder}
      value={state.data[node.attr.name]}
      onChange={e =>
        state.events.onChange({ field: node.attr.name, value: e.target.value })
      }
    />
  ),
  [SELECT]: (node, children, parent, state) => (
    <select
      value={state.data[node.attr.name]}
      name={node.attr.name}
      onChange={e =>
        state.events.onChange({ field: node.attr.name, value: e.target.value })
      }
    >
      {state.constants[node.attr.name].options.map(option => (
        <option
          value={option.value}
        >
          {option.text}
        </option>
      ))}
    </select>
  ),
  [RADIO]: (node, children, parent, state) => (
    <fieldset>
      {state.constants[node.attr.name].options.map(option => (
        <label>
          {option.text}
          <input
            type="radio"
            name={node.attr.name}
            value={option.value}
            checked={option.value === state.data[node.attr.name]}
            onChange={e => state.events.onChange({
              field: node.attr.name,
              value: e.target.value
            })}
          />
        </label>
      ))}
    </fieldset>
  ),
  [TEXT]: node => node.value
};
