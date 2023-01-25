import { useContext } from "react";
import MyContext from "../store/MyContext";

const useSelectionSort = (arr: number[]) => {
  return async () => {
    for (let i = 0; i < arr.length - 1; i++) {
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
