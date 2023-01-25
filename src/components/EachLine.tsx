type Props = {
  ele: number;
  arr: number[];
};

const EachLine = ({ ele, arr }: Props) => {
  const h = ele * 50;

  return (
    <div
      style={{ height: `${h}px` }}
      className={`w-[40px] bg-[#c0c0c0] rounded-t-md`}
    ></div>
  );
};
export default EachLine;
