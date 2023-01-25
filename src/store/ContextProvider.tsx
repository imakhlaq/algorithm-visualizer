import { useState, useEffect } from "react";
import MyContext from "./MyContext";

type contextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: contextProviderProps) => {
  const [selectedAlgo, setSelectedAlgo] = useState("Slection Sort");
  const [speed, setSpeed] = useState(400);
  const [size, setSize] = useState(25);
  const [sortStatus, setSortStatus] = useState(false);
  const [arr, setArr] = useState<number[]>([2, 4, 6, 4, 6, 9, 1]);

  useEffect(() => {
    console.log("dadad");

    setArr(
      Array.from(
        { length: Math.floor(Math.random() * 50) + 5 },
        () => Math.floor(Math.random() * 10) + 1
      )
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
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
export default ContextProvider;
