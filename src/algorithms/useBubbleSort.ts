import { useContext } from "react";
import MyContext from "../store/MyContext";
import wait from "../libs/waitLoop";
import { speed } from "../components/Header";

const useBubbleSort = (arr: number[]) => {
  const ctx = useContext(MyContext);

  return async () => {
    for (let i = 0; i < arr.length - 1; i++) {
      await wait(speed);
      ctx.setIPos(i);

      for (let j = 0; j < arr.length - i - 1; j++) {
        await wait(speed);
        ctx.setYPos(j);

        if (arr[j + 1] < arr[j]) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
  };
};

export default useBubbleSort;
