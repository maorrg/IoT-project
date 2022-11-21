import io from "socket.io-client";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import Grid from "./components/Grid";
import { HeaderResponsive } from "./components/ResponsiveHeader";
import { Title, Container } from "@mantine/core";

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
    <>
      <HeaderResponsive
        links={[
          { link: "/medidas", label: "Medidas" },
          { link: "/graficos", label: "Graficos" },
        ]}
      />
      <Container style={{marginTop: -70}}>
        <Title style={{marginBottom: 40}} order={1}>Tabla de resultados</Title>
        <Grid />
        {/* <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart> */}
      </Container>
    </>
  );
};

export default App;
