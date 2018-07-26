import { ROOT, HEADING, BLOCK, TEXT } from "./features";

export const nodes = {
  type: ROOT,
  children: [
    {
      type: HEADING,
      value: 1,
      children: [
        {
          type: TEXT,
          value: "I am a Heading"
        }
      ]
    },
    {
      type: BLOCK,
      children: [
        {
          type: TEXT,
          value: "And I am content."
        }
      ]
    }
  ]
};