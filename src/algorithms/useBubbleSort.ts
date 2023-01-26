import { useContext } from "react";
import MyContext from "../store/MyContext";
import useLoopEl from "../hooks/useLoopEl";

const useBubbleSort = (arr: number[]) => {
  const ctx = useContext(MyContext);

  const wait = useLoopEl();

  return async () => {
    for (let i = 0; i < arr.length - 1; i++) {
      await wait();
      ctx.setIPos(i);

      for (let j = 0; j < arr.length - i - 1; j++) {
        await wait();

        if (arr[j + 1] < arr[j]) {
          ctx.setYPos(j);
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
  };
};

export default useBubbleSort;
