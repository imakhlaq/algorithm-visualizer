import { useRef } from "react";
type Props = {
  ele: number;
  arr: number[];
};

const EachLine = ({ ele, arr }: Props) => {
  const h = ele * 50;

  const windowSize = useRef(window.innerWidth);
  let w;
  if (typeof windowSize.current === "number") {
    console.log(windowSize);

    w = windowSize.current / arr.length - 30;
  }

  console.log(w);

  return (
    <div
      style={{ height: `${h}px`, width: `${w}px` }}
      className={` bg-[#c0c0c0] rounded-t-md`}
    ></div>
  );
};
export default EachLine;
