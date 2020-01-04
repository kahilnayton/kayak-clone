import React from "react";

function SvgBubbles(props) {
  return (
    <svg width={36} height={32} {...props}>
      <path d="M34 28.161a3.65 3.65 0 002 3.256v.498a7.42 7.42 0 01-6.414-2.251c-.819.218-1.688.336-2.587.336-4.971 0-9-3.582-9-8s4.029-8 9-8 9 3.582 9 8c0 1.73-.618 3.331-1.667 4.64a3.635 3.635 0 00-.333 1.522zM16 0c8.702 0 15.781 5.644 15.995 12.672A12.262 12.262 0 0027 11.625c-2.986 0-5.807 1.045-7.942 2.943-2.214 1.968-3.433 4.607-3.433 7.432 0 1.396.298 2.747.867 3.993a19.66 19.66 0 01-2.987-.151C10.068 29.279 5.966 29.895 2 29.986v-.841C4.142 28.096 6 26.184 6 24c0-.305-.024-.604-.068-.897C2.313 20.72 0 17.079 0 13 0 5.82 7.163 0 16 0z" />
    </svg>
  );
}

export default SvgBubbles;