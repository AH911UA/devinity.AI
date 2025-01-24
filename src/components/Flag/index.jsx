import React from "react";
import FLAGS_ENUM from "./FLAGS_ENUM";

const Flag = ({ name }) => (
  <img
    width={25}
    src={FLAGS_ENUM[name]}
    alt={name}
  />
)

export default Flag;
