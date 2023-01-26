import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const mergeSortedParts = (
  arr: number[],
  low: number,
  mid: number,
  high: number
) => {};

const useMergeSort = (arr: number[]) => {
  const ctx = useContext(MyContext);

  const wait = useLoopEl();

  const mergeSort = async (arr: number[], low = 0, high = arr.length - 1) => {
    if (low == high) {
      return;
    }
    const mid = (high + low) / 2;

    mergeSort(arr, low, mid);

    mergeSort(arr, mid + 1, high);

    mergeSortedParts(arr, low, mid + 1, high);
  };

  return mergeSort;
};

export default useMergeSort;
