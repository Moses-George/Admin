import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useTableQueryParams = (query, data, filterKey) => {
  const [tableData, setTableData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const param = searchParams.get(query);

  //  Switch sub pages based on member status or transaction status
  useEffect(() => {
    setTableData(data);
    if (!param) {
      setTableData(data);
    } else {
      setTableData((prev) => prev?.filter((row) => row[filterKey] === param));
    }
  }, [param, query, data]);

  return { setSearchParams, tableData, param };
};

export default useTableQueryParams;
