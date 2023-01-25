import { useContext } from "react";
import MyContext from "../store/MyContext";

const useLoopEl = () => {
  const ctx = useContext(MyContext);

  return () => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, ctx.speed);
    });
  };
};

export default useLoopEl;