import React from "react";
import requireAuth from "../hoc/requireAuth";

const Feature = (props) => {
  return <div>This is login Test Page</div>;
};

export default requireAuth(Feature);
