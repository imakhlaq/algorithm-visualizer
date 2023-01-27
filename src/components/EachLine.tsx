import { useRef, useContext } from "react";
import MyContext from "../store/MyContext";

type Props = {
  ind: number;
  ele: number;
  arr: number[];
};

const EachLine = ({ ind, ele, arr }: Props) => {
  const ctx = useContext(MyContext);

  const h = ele * 50;

  const windowSize = useRef(window.innerWidth);
  let w: number;
  if (typeof windowSize.current === "number") {
    w = Math.floor(windowSize.current / arr.length - 16);
  }

  let color = ctx.bgColor;

  if (ctx.iPos > ind) {
    color = "#68B984";
  } else if (ctx.yPos + 1 == ind && ctx.yPos !== 0) {
    color = "#FFD384";
  }

  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w! / 16}rem`,
        backgroundColor: color,
      }}
      className={`rounded-md max-w-full`}
    ></div>
  );
};
export default EachLine;
