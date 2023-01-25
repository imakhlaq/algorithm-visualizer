type AlgoList = {
  name: string;
};
const AlgoList = ({ name }: AlgoList) => {
  return (
    <li>{name}</li>
  );
};
export default AlgoList;
