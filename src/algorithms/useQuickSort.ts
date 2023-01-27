import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const useQuickSort = () => {
  const ctx = useContext(MyContext);
  const wait = useLoopEl(ctx.speed / 3);

  const partition = async (arr: number[], low: number, high: number) => {
    // pivot
    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      await wait();
      ctx.setYPos(j);
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    ctx.setIPos(i+1);

    return i + 1;
  };

  const quickSort = async (arr: number[], low: number, high: number) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await wait();
      await quickSort(arr, low, pi - 1);
      await wait();
      await quickSort(arr, pi + 1, high);
      await wait();
    }
  };

  return quickSort;
};

export default useQuickSort;
