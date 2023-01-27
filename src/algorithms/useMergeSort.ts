import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const useMergeSort = () => {
  const ctx = useContext(MyContext);

  const wait = useLoopEl();

  const mergeSortedParts = async (
    a: number[],
    lo: number,
    mid: number,
    hi: number
  ) => {
    const sorted = [];
    let i = lo;
    let j = mid;

    while (i < mid && j < hi) {
      if (a[i] < a[j]) {
        ctx.setIPos(i);
        sorted.push(a[i++]);
      } else {
        ctx.setIPos(j);
        sorted.push(a[j++]);
      }
    }

    while (i < mid) sorted.push(a[i++]);
    for (let i = 0; i < sorted.length; i++) {
      a[lo++] = sorted[i];
      ctx.setIPos(lo);
    }
  };

  const mergeSort = async (arr: number[], low: number, hi: number) => {
    if (low < hi - 1) {
      const mid = Math.floor((low + hi) / 2);
      await mergeSort(arr, low, mid);
      await mergeSort(arr, mid, hi);
      await wait();
      await mergeSortedParts(arr, low, mid, hi);
      await wait();
    }
  };

  return mergeSort;
};

export default useMergeSort;
