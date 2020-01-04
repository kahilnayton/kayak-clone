import React from "react";

function SvgAirplane(props) {
  return (
    <svg width={32} height={32} {...props}>
      <path d="M24 19.999l-5.713-5.713L32 4l-4-4-17.141 6.858-5.397-5.397C3.906-.095 1.734-.467.634.633s-.727 3.273.828 4.828l5.396 5.396L0 28l4 4 10.287-13.715L20 23.998v7.999h4l2-6 6-2v-4h-7.999z" />
    </svg>
  );
}

export default SvgAirplane;
