import { useRef, useContext } from "react";
import MyContext from "../store/MyContext";

type Props = {
  ele: number;
  arr: number[];
  index: number;
};

const colorOfBar = (
  iPos: number,
  yPos: number,
  sortedStatus: boolean,
  index: number
) => {
  if (index < iPos) {
    return "#FFD372";
  }
  if (yPos === index) {
    return "#FFD372";
  } else {
    return "#F55050";
  }
};

const EachLine = ({ ele, index, arr }: Props) => {
  const h = ele * 50;
  const ctx = useContext(MyContext);

  const windowSize = useRef(window.innerWidth);
  let w;
  if (typeof windowSize.current === "number") {
    w = windowSize.current / arr.length - 28;
  }

  const { iPos, yPos, sortStatus } = ctx;
  const value = colorOfBar(iPos, yPos, sortStatus, index);
  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        backgroundColor: ctx.sortStatus ? value : "#c0c0c0",
      }}
      className={`rounded-md`}
    ></div>
  );
};
export default EachLine;

//"#F55050"
