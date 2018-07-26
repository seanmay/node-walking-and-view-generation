import { INTERPOLATED_STRING, TEXT_SEGMENT, PROPERTY_REFERENCE } from "./features";

export const nodes = {
  type: INTERPOLATED_STRING,
  children: [
    {
      type: TEXT_SEGMENT,
      value: "Ad-lib: "
    },
    {
      type: TEXT_SEGMENT,
      value: "I used to be a(n) "
    },
    {
      type: PROPERTY_REFERENCE,
      value: "role"
    },
    {
      type: TEXT_SEGMENT,
      value: " like "
    },
    {
      type: PROPERTY_REFERENCE,
      value: "properNoun"
    },
    {
      type: TEXT_SEGMENT,
      value: "..."
    }
  ]
};