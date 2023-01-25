import { createContext } from "react";

type MyContextType={
  selectedAlgo:string
  setSelectedAlgo:(algo:string)=>void,
}

const MyContext = createContext({} as MyContextType);

export default MyContext;
