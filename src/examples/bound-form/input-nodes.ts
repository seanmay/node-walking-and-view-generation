import { ROOT, INPUT, SELECT, RADIO, TEXT } from "./features";

export const nodes = {
  type: ROOT,
  children: [
    { type: TEXT, value: "The " },
    { type: INPUT, attr: { name: "product", type: "text" } },
    { type: TEXT, value: " is recommended by " },
    { type: INPUT, attr: { name: "count", type: "number" } },
    { type: TEXT, value: " out of " },
    { type: INPUT, attr: { name: "total", type: "number" } },
    { type: SELECT, attr: { name: "professionals" } },
    { type: TEXT, value: ". Care to hear more? " },
    { type: RADIO, attr: { name: "subscribe" } }
  ]
};