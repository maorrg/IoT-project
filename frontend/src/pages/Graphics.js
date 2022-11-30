import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import TemperatureTimePlot from "./../components/TemperatureTimePlot";
import TsdTimePlot from "./../components/TSDTimePlot";
import axios from "axios";

const Graphics = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [tsdData, setTsdData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/measures`).then((res) => {
      const rawData = res.data.slice(0, 10);
      rawData.forEach((element, index) => {
        setTemperatureData((current) => [
          ...current,
          { time: index * 5, temperature: element.temperature },
        ]);
        setTsdData((current) => [
          ...current,
          { time: index * 5, tsd: element.tsd },
        ]);
      });
    });
  }, []);

  return (
    <Container style={{ marginTop: -70 }}>
      <h1> Gráficos </h1>
      <Grid>
        <Grid.Col span={6}>
          <h2>Gráfica Temperatura - Tiempo</h2>
          <TemperatureTimePlot data={temperatureData} />
        </Grid.Col>
        <Grid.Col span={6}>
          <h2>Gráfica TSD - Tiempo</h2>
          <TsdTimePlot data={tsdData} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Graphics;
