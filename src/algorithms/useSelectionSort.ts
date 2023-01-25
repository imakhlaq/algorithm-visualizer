import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const useSelectionSort = (arr: number[]) => {
  const ctx = useContext(MyContext);

  const wait = useLoopEl();

  return async () => {
    for (let i = 0; i < arr.length - 1; i++) {
      await wait();
      ctx.setIPos(i);

      for (let j = i + 1; j < arr.length; j++) {
        await wait();

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
