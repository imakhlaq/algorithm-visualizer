import EachLine from "./EachLine";
import { useContext } from "react";
import MyContext from "../store/MyContext";

const Array = () => {
  const ctx = useContext(MyContext);
  return (
    <section className="container mx-auto flex justify-center mt-[15rem] min-h-[35rem]">
      <div className={`flex items-end space-x-4`}>
        {ctx.arr.map((el, index, array) => {
          return <EachLine key={index} ind={index} ele={el} arr={array} />;
        })}
      </div>
    </section>
  );
};
export default Array;
