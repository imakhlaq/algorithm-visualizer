import { useState, useEffect } from "react";
import MyContext from "./MyContext";

type contextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: contextProviderProps) => {
  const [selectedAlgo, setSelectedAlgo] = useState("Selection Sort");
  const [speed, setSpeed] = useState(20);
  const [size, setSize] = useState(20);
  const [sortStatus, setSortStatus] = useState(false);
  const [arr, setArr] = useState<number[]>([2, 4, 6, 4, 6, 9, 1, 6, 3, 8]);
  const [iPos, setIPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [bgColor, setBgColor] = useState("#c0c0c0");
  const [sotedEl, setSortedEl] = useState<number | null>(null);

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
    yPos,
    setYPos,
    bgColor,
    setBgColor,
    sotedEl,
    setSortedEl,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
export default ContextProvider;
