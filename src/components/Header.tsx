import MyContext from "../store/MyContext";
import { useContext, useState } from "react";

const Header = () => {
  const [showList, setShowList] = useState(false);

  const ctx = useContext(MyContext);
  console.log(ctx.selectedAlgo);

  return (
    <header className="flex justify-around mt-9 items-center">
      <div>
        <h1 className="text-4xl ml-8">Algorithm Visualizer</h1>
      </div>
      <div className="flex space-x-8 justify-around items-center text-2xl font-semibold">
        <button>Ramdomize Array</button>
        <div className="space-x-2">
          <label htmlFor="speed">Speed</label>
          <input type="range" id="speed" />
        </div>
        <div className="space-x-2">
          <label htmlFor="speed">Size</label>
          <input type="range" id="speed" />
        </div>

        <div className="cursor-pointer relative">
          <p>{ctx.selectedAlgo} </p>
          <div className="absolute top-20 right-8">
            <ul>
              <li>Bubble Sort</li>
              <li>Insertion Sort</li>
              <li>Merge Sort</li>
              <li>Quick Sort</li>
              <li>Bubble Sort</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
