import { useContext } from "react";
import MyContext from "../store/MyContext";

const SortingBtn = () => {
  const ctx = useContext(MyContext);

  const clickHandler = () => {
    
  };

  return (
    <div className="container mx-auto flex justify-center mt-20 w-[22rem] ">
      <button
        className="bg-white w-full p-2 text-2xl rounded-md text-black"
        onClick={clickHandler}
      >
        {ctx.sortStatus ? "Sorting" : "Sort"}
      </button>
    </div>
  );
};
export default SortingBtn;
