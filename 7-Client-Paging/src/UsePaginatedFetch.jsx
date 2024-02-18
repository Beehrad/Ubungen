import _ from "lodash";
import React, { useEffect, useState } from "react";

export default function UsePaginatedFetch(url, pageSize) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const pageinatedData = _.chunk(data, pageSize);
    console.log(pageinatedData);
    setData(pageinatedData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return [loading, data];
}
