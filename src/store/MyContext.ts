import { createContext } from "react";

type MyContextType = {
  selectedAlgo: string;
  setSelectedAlgo: (algo: string) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  size: number;
  setSize: (size: number) => void;
};

const MyContext = createContext({} as MyContextType);

export default MyContext;
