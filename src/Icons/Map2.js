import React from "react";

function SvgMap2(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path d="M21 6L11 2 0 6v24l11-4 10 4 11-4V2L21 6zm-9-1.446l8 3.2v19.692l-8-3.2V4.554zM2 7.401l8-2.909v19.744l-8 2.909V7.401zm28 17.198l-8 2.909V7.764l8-2.909v19.744z" />
    </svg>
  );
}

export default SvgMap2;
