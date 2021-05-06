import { Link } from "react-router-dom";

const DataBaseTable = ({ table }) => {
  return (
    <div className="p-2 w-full h-auto  flex flex-wrap gap-4 items-center justify-center  ">
      {table.map((name, i) => (
        <div
          key={i}
          className="max-h-32 border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden hover:shadow-md cursor-pointer w-full max-w-sm"
        >
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {name}
            </h1>
            <div className="flex items-center flex-wrap  ">
              <Link
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                to={`/app/table/${name}`}
              >
                Go to the table
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataBaseTable;
