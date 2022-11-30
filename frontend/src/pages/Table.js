import { Title, Container } from "@mantine/core";
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
import Grid from "../components/Grid";

const Table = () => {
  return (
    <Container style={{ marginTop: -70 }}>
      <Title style={{ marginBottom: 40 }} order={1}>
        Tabla de resultados
      </Title>
      <Grid />
      {/* <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart> */}
    </Container>
  );
};

export default Table;