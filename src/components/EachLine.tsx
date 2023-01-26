import { useRef, useContext } from "react";
import MyContext from "../store/MyContext";

type Props = {
  ind: number;
  ele: number;
  arr: number[];
};

const EachLine = ({ ind, ele, arr }: Props) => {
  const h = ele * 50;
  const ctx = useContext(MyContext);

  const windowSize = useRef(window.innerWidth);
  let w;
  if (typeof windowSize.current === "number") {
    w = windowSize.current / arr.length - 28;
  }

  let color = ctx.bgColor;
  if (ctx.yPos - 1 == ind) {
    color = "#FFD384";
  }

  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        backgroundColor: color,
      }}
      className={`rounded-md`}
    ></div>
  );
};
export default EachLine;

//"#F55050"
