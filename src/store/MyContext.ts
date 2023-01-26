import { createContext } from "react";

type MyContextType = {
  selectedAlgo: string;
  setSelectedAlgo: (algo: string) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  size: number;
  setSize: (size: number) => void;
  sortStatus: boolean;
  setSortStatus: (setStatus: boolean) => void;
  arr: number[];
  setArr: (arr: number[]) => void;
  iPos: number;
  setIPos: (pos: number) => void;
  yPos: number;
  setYPos: (pos: number) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  swapEl: number | null;
  setSwapEl: (el: number | null) => void;
};

const MyContext = createContext({} as MyContextType);

export default MyContext;
