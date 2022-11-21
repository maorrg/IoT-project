const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());
const server = require("http").createServer(app);
const mqtt = require("mqtt");
const host = "192.168.18.203";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const connectUrl = `mqtt://${host}:${port}`;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const io = require("socket.io")(server, { cors: { origin: "*" } });

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "pi",
  password: "raspberry",
  reconnectPeriod: 1000,
});

const topic = "measures/topic";
client.on("connect", () => {
  client.subscribe(topic);
});

// client.on("message", async (topic, message) => {
//   messageReceive = true;
//   console.log(message.toString());
//   const measure_json = JSON.parse(message);
//   const measure = await prisma.measure.create({
//     data: {
//       temperature: measure_json.temperature,
//       humidity: measure_json.humidity,
//       light: measure_json.light,
//       tsd: measure_json.tsd,
//     },
//   });
//   console.log(measure);
//   // io.local.emit('measures', measure);
// });

// // 1. Listen for socket connections
// io.on("connection", (client) => {
//   //2. Every second, emit a 'cpu' event with the current CPU usage
//   setInterval(async () => {
//     const data = await prisma.measure.findMany();
//     client.emit("cpu", {
//       name: "cpu",
//       value: data[data.length - 1].temperature,
//     });
//   }, 1000);
// });

app.get('/measures', async (req, res) => {
  const measures = await prisma.measure.findMany();
  res.json(measures).status(200);
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
