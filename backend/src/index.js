import express from "express";
import "dotenv/config";
import dns from "dns";

dns.setServers(["0.0.0.0", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT;

console.log("DB_URL=", process.env.DB_URL);

app.listen(PORT, () => console.log("server is up and running on PORT:", PORT));
