import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const useSelectionSort = (arr: number[]) => {
  const forI = useLoopEl();

  return async () => {
    for (let i = 0; i < arr.length - 1; i++) {
      await forI();
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  };
};

export default useSelectionSort;
