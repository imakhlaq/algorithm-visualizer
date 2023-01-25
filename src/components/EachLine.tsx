import { useRef, useContext } from "react";
import MyContext from "../store/MyContext";

type Props = {
  ele: number;
  arr: number[];
};

const EachLine = ({ ele, arr }: Props) => {
  const h = ele * 50;
  const ctx = useContext(MyContext);

  const windowSize = useRef(window.innerWidth);
  let w;
  if (typeof windowSize.current === "number") {
    w = windowSize.current / arr.length - 28;
  }

  return (
    <div
      style={{
        height: `${h}px`,
        width: `${w}px`,
        backgroundColor: ctx.sortStatus ? "#F55050" : "#c0c0c0",
      }}
      className={`rounded-t-md`}
    ></div>
  );
};
export default EachLine;
