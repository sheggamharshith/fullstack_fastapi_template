import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DataBaseTable from "../../components/DataBaseTableDataType";
import DashBoardTemplate from "../../components/Layout/DashBoardMainTemplate";
import Loader from "../../components/Loader";
import axios from "../../customAxios";

const getTable = (setIsLoading, setError, setTables) => {
  setIsLoading(true);
  axios
    .get("v1/database/tables/datatypes")
    .then((response) => {
      setTables(response.data);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error.response.data.detail);
      setIsLoading(false);
    });
};

const AdminDataBaseTables = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    getTable(setIsLoading, setError, setTables);
  }, []);

  if (error) {
    toast.error(error);
  }

  if (isLoading) {
    <div
      className={
        isLoading
          ? "absolute flex w-full h-full items-center justify-center bg-gray-100  bg-opacity-30"
          : "hidden"
      }
    >
      <Loader />
    </div>;
  }

  return (
    <DashBoardTemplate>
      <div className="h-full overflow-y-auto p-2 bg-gray-100">
        <div className="flex flex-wrap-reverse space-x-10">
          {tables.map((value, i) => (
            <DataBaseTable key={i} {...value} />
          ))}
        </div>
      </div>
    </DashBoardTemplate>
  );
};

export default AdminDataBaseTables;
