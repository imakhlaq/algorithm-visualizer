import { useRef, useContext, useEffect } from "react";
import MyContext from "../store/MyContext";

type Props = {
  ele: number;
  arr: number[];
  index: number;
};

const colorOfBar = (iPos: number, yPos: number, index: number) => {
  if (yPos === index) {
    return "#FFD372";
  }
  if (index < iPos) {
    return "#FFD372";
  }
};

const initialBarColor = (sortingStatus: boolean) => {
  if (sortingStatus) {
    return "#F55050";
  } else {
    return "#c0c0c0";
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

  const value = colorOfBar(iPos, yPos, index);
  const color = initialBarColor(sortStatus);
  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        backgroundColor: ctx.bgColor,
      }}
      className={`rounded-md`}
    ></div>
  );
};
export default EachLine;

//"#F55050"
