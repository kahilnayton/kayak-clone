import React from "react";

function SvgKey(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path d="M22 0c-5.523 0-10 4.477-10 10 0 .626.058 1.238.168 1.832L0 24v6a2 2 0 002 2h2v-2h4v-4h4v-4h4l2.595-2.595A9.977 9.977 0 0022 20c5.523 0 10-4.477 10-10S27.523 0 22 0zm2.996 10.004a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

export default SvgKey;
