import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from "recharts";

const Component = ({ data }) => {
  return (
    <LineChart width={400} height={250} data={data}>
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time"/>
      <YAxis dataKey={"temperature"}/>
    </LineChart>
  );
};

export default Component;
