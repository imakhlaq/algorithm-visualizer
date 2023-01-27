import { useContext, useCallback } from "react";
import MyContext from "../store/MyContext";

const useLoopEl = (speed: number) => {
  const ctx = useContext(MyContext);

  return () => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, speed);
    });
  };
};

export default useLoopEl;
