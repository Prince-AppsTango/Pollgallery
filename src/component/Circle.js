import React from "react";

export default function Circle(props) {
  return (
    <>
     <div className={props.isActive? "circle blue_border":"circle"} onClick={props.onClick}>{props.initial}</div>
    </>
  );
}
