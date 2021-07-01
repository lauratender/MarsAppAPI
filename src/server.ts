import express, { Express } from "express";
import { router } from "./routes";
 
const app = express();
const port = 8000;
 
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

// 4 At "http://localhost:8000/rovers/rover_name/photos/camera_type" 
// we can see the JSON with information about photos made with specificied rover and camera on sol 1000.
