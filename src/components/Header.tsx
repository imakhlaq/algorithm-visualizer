import MyContext from "../store/MyContext";
import { useContext, useState, MouseEvent, FormEvent } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const algos = [
  {
    name: "Selection Sort",
    id: "1",
  },
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
    ctx.setBgColor("#c0c0c0");
    ctx.setSize(+event.currentTarget.value);
  };
  const genRandomArray = () => {
    ctx.setBgColor("#c0c0c0");
    ctx.setArr(
      Array.from(
        { length: Math.floor(Math.random() * 50) + 5 },
        () => Math.floor(Math.random() * 10) + 1
      )
    );
    ctx.setSortStatus(false);
  };

  return (
    <header className="flex flex-col lg:flex-row justify-around mt-9 items-center md:gap-10">
      <div className="relative">
        <h1 className="lg:text-4xl md:text-2xl text-xl ml-8 font-semibold max-w-full">
          Algorithm Visualizer
        </h1>
        <p className="absolute left-24 lg:left-56">By Akhlaq Ahmad</p>
      </div>
      <div className="space-x-8 justify-around items-center md:flex md:p-2 text-lg font-semibold hidden lg:flex">
        <button
          disabled={ctx.sortStatus}
          onClick={genRandomArray}
          className="p-2 rounded-md text-white hover:bg-white hover:border-black hover:text-black hover:shadow-xl hover:-translate-y-2 transition-all font-semibold tracking-widest"
        >
          Ramdomize Array
        </button>
        <div className="space-x-2">
          <label htmlFor="speed">Speed</label>
          <input
            type="range"
            id="speed"
            min="10"
            max="500"
            step="1"
            defaultValue="100"
            onChange={speedChangeHandler}
          />
        </div>
        <div className="space-x-2">
          <label htmlFor="size">Size</label>
          <input
            type="range"
            id="size"
            min="5"
            max="50"
            step="1"
            disabled={ctx.sortStatus}
            defaultValue="20"
            onChange={sizeChangeHandler}
          />
        </div>

        <div className="cursor-pointer relative">
          <button
            disabled={ctx.sortStatus}
            onClick={ShowAlgoLists}
            className="py-2 rounded-md text-white hover:bg-white hover:border-black hover:text-black hover:shadow-xl hover:-translate-y-2 transition-all font-semibold tracking-widest flex gap-3 justify-center items-center"
          >
            {ctx.selectedAlgo}{" "}
            {showList ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
          </button>
          {showList && (
            <div className="absolute top-12 -right-0 bg-white w-full min-w-[12rem] font-normal text-black rounded-sm shadow-lg min-h-fit">
              <ul className="text-center mt-4">
                {algos.map((algo) => (
                  <li
                    className="mb-4"
                    onClick={changeAlgoHandler}
                    key={algo.id}
                  >
                    {algo.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className=" md:hidden"></div>
    </header>
  );
};
export default Header;
