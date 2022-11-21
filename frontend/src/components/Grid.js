import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  { key: "id", name: "Id" },
  { key: "temperature", name: "Temperatura" },
  { key: "humidity", name: "Humedad" },
  { key: "light", name: "Iluminación" },
  { key: "tsd", name: "Total Solids Dissolved" },
  { key: "createdAt", name: "Fecha" },
];

const Grid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/measures`).then((res) => {
      setData(res.data);
    });
  }, []);

  return <DataGrid columns={columns} rows={data} />;
};

export default Grid;
