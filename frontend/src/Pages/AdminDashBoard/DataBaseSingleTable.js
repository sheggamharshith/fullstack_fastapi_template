import { useParams } from "react-router-dom";

const DBSingleTable = () => {
    console.log("hitted")
  const {id} = useParams();

  return <div>{id} </div>;
};


export default DBSingleTable;