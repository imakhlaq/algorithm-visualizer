const Header = () => {
  return (
    <header className="flex justify-between mt-9 items-center">
      <div>
        <h1 className="text-4xl ml-8">Algorithm Visualizer</h1>
      </div>
      <div>
        <button>Ramdomize Array</button>
        <label htmlFor="speed">
          Speed
          <input type="range" id="speed" />
        </label>
        <label htmlFor="size">
          Size
          <input type="range" id="size" />
        </label>
      </div>
    </header>
  );
};
export default Header;
