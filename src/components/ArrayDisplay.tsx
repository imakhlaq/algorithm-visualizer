import EachLine from "./EachLine";
const array = [1, 3, 4, 5, 2, 5, 6, 10, 2, 3, 9];
const Array = () => {
  return (
    <section className="container mx-auto flex justify-center mt-[25rem]">
      <div className={`flex items-end space-x-4`}>
        {array.map((el, index, array) => (
          <EachLine key={index} ele={el} arr={array} />
        ))}
      </div>
    </section>
  );
};
export default Array;
