import { useState, useEffect } from "react";
import MyContext from "./MyContext";

type contextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: contextProviderProps) => {
  const [selectedAlgo, setSelectedAlgo] = useState("Slection Sort");
  const [speed, setSpeed] = useState(400);
  const [size, setSize] = useState(20);
  const [sortStatus, setSortStatus] = useState(false);
  const [arr, setArr] = useState<number[]>([2, 4, 6, 4, 6, 9, 1, 6, 3, 8]);
  const [iPos, setIPos] = useState(0);

  useEffect(() => {
    setArr(
      Array.from({ length: size }, () => Math.floor(Math.random() * 10) + 1)
    );
  }, [size]);

  const value = {
    selectedAlgo,
    setSelectedAlgo,
    speed,
    setSpeed,
    size,
    setSize,
    sortStatus,
    setSortStatus,
    arr,
    setArr,
    iPos,
    setIPos,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
export default ContextProvider;
