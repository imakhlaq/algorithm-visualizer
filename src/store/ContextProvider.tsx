import { useState } from "react";
import MyContext from "./MyContext";

type contextProviderProps = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: contextProviderProps) => {
  const [selectedAlgo, setSelectedAlgo] = useState("Slection Sort");
  const [speed,setSpeed]= useState(400);
  const [size,setSize]=useState(25);

  const value = {
    selectedAlgo,
    setSelectedAlgo,
    speed,
    setSpeed,
    size,
    setSize
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
export default ContextProvider;
