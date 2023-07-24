import React, { useContext } from "react";
import useMousePosition from "@/utils/hooks/useMousePosition";
import { useMouseCursor } from "@/utils/MouseContext";

const DotRing = () => {
  const { cursorType } = useMouseCursor();
  const { x, y } = useMousePosition();
  return (
    <>
      {/* ring */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      >
        {" "}
      </div>
      {/* dot */}
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
