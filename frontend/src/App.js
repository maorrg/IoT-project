import io from "socket.io-client";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { HeaderResponsive } from "./components/ResponsiveHeader";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from '../src/pages/Table';
import Graphics from "./pages/Graphics";

const socket = io(`http://localhost:3001`, {
  transports: ["websocket", "polling"],
});

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("measures", (data) => {
      console.log(data);
      // setData((currentData) => [...currentData, cpuPercent]);
      setData(data);
    });
  }, []);
  return (
    <Router>
      <HeaderResponsive
        links={[
          { link: "/measures", label: "Medidas" },
          { link: "/graphics", label: "Graficos" },
        ]}
      />
      <Routes>
        <Route exact path="/measures" element={<Table/>}/>
        <Route exact path="/graphics" element={<Graphics/>}/>
      </Routes>
    </Router>
  );
};

export default App;
