import { useContext } from "react";
import MyContext from "../store/MyContext";
import wait from "../libs/waitLoop";
import { speed } from "../components/Header";

const useSelectionSort = (arr: number[]) => {
  const ctx = useContext(MyContext);

  //const wait = useLoopEl();

  return async () => {
    for (let i = 0; i < arr.length; i++) {
      await wait(speed);
      ctx.setIPos(i);

      for (let j = i; j < arr.length; j++) {
        await wait(speed);
        ctx.setYPos(j);

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
