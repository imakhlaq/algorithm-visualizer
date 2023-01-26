import { useContext } from "react";
import MyContext from "../store/MyContext";

const useLoopEl = () => {
  const ctx = useContext(MyContext);

  return () => {
    const speed = ctx.getCurrSpeed();
    console.log(speed);

    return new Promise<void>((resolve) => {
      setTimeout(resolve, ctx.speed / 2);
    });
  };
};

export default useLoopEl;
