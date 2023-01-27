import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const useMergeSort = () => {
  const ctx = useContext(MyContext);

  const wait = useLoopEl();


  const mergeSortedParts = async (
    arr: number[],
    l: number,
    m: number,
    r: number
  ) => {
    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    let i = 0;

    // Initial index of second subarray
    let j = 0;

    // Initial index of merged subarray
    let k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  };

  const mergeSort = async (arr: number[], low: number, high: number) => {
    if (low >= high) {
      return;
    }
    const mid = low + (high - low / 2);

    mergeSort(arr, low, mid);

    mergeSort(arr, mid + 1, high);

    mergeSortedParts(arr, low, mid, high);
  };

  return mergeSort;
};

export default useMergeSort;
