import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";

import dns from "dns";

dns.setServers(["0.0.0.0", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
  connectDB();
  console.log("server is up and running on PORT:", PORT);
});
