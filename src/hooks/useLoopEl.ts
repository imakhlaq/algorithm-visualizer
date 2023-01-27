import { useContext, useCallback } from "react";
import MyContext from "../store/MyContext";

const useLoopEl = () => {
  const ctx = useContext(MyContext);

  return () => {
    return new Promise<void>((resolve) => {
      console.log(ctx.speed);

      setTimeout(resolve, ctx.speed / 2);
    });
  };
};

export default useLoopEl;
