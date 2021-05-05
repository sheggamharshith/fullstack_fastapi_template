import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DashBoardTemplate from "../../components/Layout/DashBoardMainTemplate";
import Loader from "../../components/Loader";
import DataBaseTable from "../../components/DataBaseTable"

import axios from "../../customAxios";

const getTableNames = (setTableNames, setIsLoading, setError) => {
  setIsLoading(true);

  axios
    .get("v1/database/table")
    .then((res) => {
      console.log(res);
      setTableNames(res.data.names);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.detail);
      setError(err.response.detail);
      setIsLoading(false);
    });
};

const AdminMainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tableNames, setTableNames] = useState([]);

  useEffect(() => {
    getTableNames(setTableNames, setIsLoading, setError);
  }, []);

  return (
    <DashBoardTemplate>
      <div className="w-full h-full">
        <div
          className={
            isLoading
              ? "absolute flex w-full h-full items-center justify-center bg-gray-200  bg-opacity-30"
              : "hidden"
          }
        >
          <Loader />
          </div>
        <DataBaseTable table={tableNames} />
      </div>
    </DashBoardTemplate>
  );
};

export default AdminMainPage;
