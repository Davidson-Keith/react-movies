// import { jsx as _jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";


import React from "react";

export default function Simple() {
  return (
    React.createElement("div", {
      myatt: "myVal"
    }, React.createElement("h1", null, "hi..."))
  //   <div>
  //     <h1>Hi mate</h1>
  //   </div>
  )
}
