const DynamicDataBaseTable = ({ table }) => {
  if (Object.keys(table).length === 0) {
    return <div>Loading/...........</div>;
  }

  return (
    <div className="overflow-x-auto w-full text-center">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 ">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {Object.keys(table[0]).map((keys, i) => (
                  <th
                    scope="col"
                    key={i}
                    className="p-2  text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {keys}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {table.map((rows, i) => (
                <tr key={i}>
                  {console.log(Object.values(rows))}
                  {Object.values(rows).map((value, i) => (
                    <td className="p-2" key={i}>{`${value}`}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicDataBaseTable;
