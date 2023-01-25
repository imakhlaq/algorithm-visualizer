import MyContext from "../store/MyContext";
import { useContext, useState, MouseEvent } from "react";

const algos = [
  {
    name: "Bubble Sort",
    id: "2",
  },
  {
    name: "Insertion Sort",
    id: "3",
  },
  {
    name: "Merge Sort",
    id: "4",
  },
  {
    name: "Quick Sort",
    id: "5",
  },
];

const Header = () => {
  const [showList, setShowList] = useState(false);

  const ctx = useContext(MyContext);

  const ShowAlgoLists = () => {
    setShowList((state) => !state);
  };

  const changeAlgoHandler = (event: MouseEvent<HTMLLIElement>) => {
    ctx.setSelectedAlgo((event.target as HTMLElement).textContent!);
  };

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
          <button onClick={ShowAlgoLists}>{ctx.selectedAlgo} </button>
          {showList && (
            <div className="absolute top-12 -right-3 bg-white w-full min-w-[12rem] font-normal text-black rounded-sm shadow-lg">
              <ul className="text-center space-y-3 mt-4">
                {algos.map((algo) => (
                  <li onClick={changeAlgoHandler} key={algo.id}>
                    {algo.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
