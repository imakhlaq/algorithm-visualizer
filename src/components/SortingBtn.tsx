import { useContext } from "react";
import MyContext from "../store/MyContext";
import useSelectionSort from "../algorithms/useSelectionSort";
import useBubbleSort from "../algorithms/useBubbleSort";
import useInsertionSort from "../algorithms/useInsertionSort";
import useMergeSort from "../algorithms/useMergeSort";
import useQuickSort from "../algorithms/useQuickSort";

const SortingBtn = () => {
  const ctx = useContext(MyContext);
  const slectionSort = useSelectionSort(ctx.arr);
  const bubbleSort = useBubbleSort(ctx.arr);
  const insertionSort = useInsertionSort(ctx.arr);
  const mergeSort = useMergeSort();
  const quickSort = useQuickSort();

  const clickHandler = () => {
    const updating = async () => {
      ctx.setBgColor("#F55050");
      ctx.setSortStatus(true);

      if (ctx.selectedAlgo === "Selection Sort") {
        await slectionSort();
      }
      if (ctx.selectedAlgo === "Bubble Sort") {
        await bubbleSort();
      }
      if (ctx.selectedAlgo === "Insertion Sort") {
        await insertionSort();
      }
      if (ctx.selectedAlgo === "Merge Sort") {
        await mergeSort(ctx.arr, 0, ctx.arr.length);
      }
      if (ctx.selectedAlgo === "Quick Sort") {
        await quickSort(ctx.arr, 0, ctx.arr.length-1);
      }

      ctx.setSortStatus(false);
      ctx.setBgColor("#68B984");
      ctx.setIPos(0);
      ctx.setYPos(0);
    };
    updating();
  };

  return (
    <div className="container mx-auto flex justify-center mt-20 w-[22rem] items-center">
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
