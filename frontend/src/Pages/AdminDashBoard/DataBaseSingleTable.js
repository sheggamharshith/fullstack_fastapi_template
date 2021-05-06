import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DynamicDataBaseTable from "../../components/DynamicDatabaseTable";
import DashBoardMainTemplate from "../../components/Layout/DashBoardMainTemplate"
import axios from "../../customAxios";


const getSingleTable = (id,setTable,setisLoading) => {
  setisLoading(true)
  axios
    .get(`v1/database/table/${id}/values`)
    .then((res) => {
      console.log(res);
      setTable(res.data)
    setisLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setisLoading(false)
    });
};

const DBSingleTable = () => {
  const { id } = useParams();
  const [table,setTable]= useState([]);
  const [isLoading,setisLoading] = useState(false);


  useEffect(
    ()=>
    {
      getSingleTable(id,setTable,setisLoading)
    },[id]
  )
    if (isLoading)
    {
      return <div>loading</div>
    }

  return (
    <DashBoardMainTemplate>
      <div className="h-full border border-black p-4  flex w-full">
        <DynamicDataBaseTable table={table} />
      </div>
    </DashBoardMainTemplate>
  );
};

export default DBSingleTable;
