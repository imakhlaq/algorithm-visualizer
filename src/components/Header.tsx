import MyContext from "../store/MyContext";
import { useContext, useState, MouseEvent, FormEvent } from "react";

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
    setShowList((state) => !state);
  };

  const speedChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    ctx.setSpeed(+event.currentTarget.value);
  };
  const sizeChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    ctx.setSize(+event.currentTarget.value);
  };
  const genRandomArray = () => {
    ctx.setArr(
      Array.from(
        { length: Math.floor(Math.random() * 50) + 5 },
        () => Math.floor(Math.random() * 10) + 1
      )
    );
    console.log(ctx.arr);
  };

  return (
    <header className="flex justify-around mt-9 items-center">
      <div>
        <h1 className="md:text-4xl text-xl ml-8">Algorithm Visualizer</h1>
      </div>
      <div className="flex space-x-8 justify-around items-center md:text-2xl text-xl font-semibold">
        <button onClick={genRandomArray}>Ramdomize Array</button>
        <div className="space-x-2">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            id="speed"
            min="100"
            max="1000"
            step="1"
            defaultValue="400"
            onChange={speedChangeHandler}
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="size">Size</label>
          <input
            type="range"
            id="size"
            min="5"
            max="100"
            step="1"
            defaultValue="25"
            onChange={sizeChangeHandler}
          />
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
