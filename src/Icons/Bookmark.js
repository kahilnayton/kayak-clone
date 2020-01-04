import React from "react";

function SvgBookmark(props) {
  return (
    <svg width={20} height={20} {...props}>
      <path d="M14 2v17l-4-4-4 4V2c0-.553.585-1.02 1-1h6c.689-.02 1 .447 1 1z" />
    </svg>
  );
}

export default SvgBookmark;
