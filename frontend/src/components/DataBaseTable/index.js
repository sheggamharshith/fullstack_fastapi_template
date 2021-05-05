import { useHistory } from "react-router-dom";

const redirectTotableIndiviualPage = (name,history) =>
{
    history.push(`/app/table/${name}`)
}

const DataBaseTable = ({ table }) => {
    const  history = useHistory()
  return (
    <div className="w-full max-h-80 border border-fuchsia-400">
      {table.map((name, i) => (
        <div
          key={i}
          onClick={() => redirectTotableIndiviualPage(name,history)}
          className="border border-black"
        >
          {" "}
          {name}{" "}
        </div>
      ))}
    </div>
  );
};

export default DataBaseTable;
