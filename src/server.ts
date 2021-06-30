import express, { Express } from "express";
import axios from 'axios';
import {API_KEY} from "./info";
 
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

// 2
const camera_type: string = Cameras[0];
const rover_name: string = "Curiosity";

const router = express.Router();

router.get('/rovers/photos', function (req, res) {

  console.log(`Getting photos made with ${camera_type.toUpperCase()} from rover ${rover_name} ...`);
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover_name}/photos?sol=1000&camera=${camera_type}&api_key=${API_KEY}`;

  axios.get(URL)
  .then((response) => {
    let result = response.data;
    res.send(result);
  })
  .catch(error => {
    console.log(error)
  });

});

app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});

// 3 At "http://localhost:8000/rovers/photos" we can see the JSON with information about rovers' photos
