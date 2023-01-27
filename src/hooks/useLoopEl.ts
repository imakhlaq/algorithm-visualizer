import { useContext, useCallback } from "react";
import MyContext from "../store/MyContext";

const useLoopEl = () => {
  const ctx = useContext(MyContext);

  return (timer = ctx.speed) => {
    return new Promise<void>((resolve) => {
      console.log(timer);
      setTimeout(resolve, timer);
    });
  };
};

export default useLoopEl;
