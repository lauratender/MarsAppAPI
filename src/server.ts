import express, { Express } from "express";
import axios from "axios";
import { API_KEY } from "./info";
 
const app = express();
const port = 8000;
 
app.use(express.json());

// Part 3

// 1
enum Cameras {
  fhaz = 0,
  rhaz,
  mast,
  chemcam,
  mahli,
  mardi,
  navcam,
  pancam,
  minites,
}

// 4
const router = express.Router();

router.get("/rovers/:rover/photos/:camera", function (req, res) {

  //console.log(req.params);
  const camera_type: string = req.params.camera;
  const rover_name: string = req.params.rover;

  console.log(`Getting photos made with ${camera_type.toUpperCase()} from rover ${rover_name} ...`);
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?sol=1000&camera=${camera_type}&api_key=${API_KEY}`;

  axios.get(URL)
  .then((response) => {
    const result = response.data;
    res.send(result);
  })
  .catch(error => {
    console.log(error)
  });

});

app.use("/", router);

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

// 4 At "http://localhost:8000/rovers/rover_name/photos/camera_type" 
// we can see the JSON with information about photos made with specificied rover and camera on sol 1000.
