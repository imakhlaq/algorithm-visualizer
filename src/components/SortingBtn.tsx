import { useContext } from "react";
import MyContext from "../store/MyContext";
import useSelectionSort from "../algorithms/useSelectionSort";

const SortingBtn = () => {
  const ctx = useContext(MyContext);
  const slectionSort = useSelectionSort(ctx.arr);

  const clickHandler = () => {
    const updating = async () => {
      ctx.setBgColor("#F55050");
      ctx.setSortStatus(true);
      await slectionSort();
      ctx.setSortStatus(false);
      ctx.setBgColor("#68B984");
    };
    updating();
  };

  return (
    <div className="container mx-auto flex justify-center mt-20 w-[22rem] ">
      <button
        disabled={ctx.sortStatus}
        className="bg-[#212529] border w-full p-2 text-3xl rounded-md text-white hover:bg-white hover:border-black hover:text-black hover:shadow-xl hover:-translate-y-2 transition-all font-semibold tracking-widest"
        onClick={clickHandler}
      >
        {ctx.sortStatus ? "Sorting" : "Sort"}
      </button>
    </div>
  );
};
export default SortingBtn;
