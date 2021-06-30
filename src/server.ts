import express, { Express } from "express";
import axios from "axios";
import { API_KEY } from "./info";
 
const app = express();
const port = 8000;
 
app.use(express.json());

// Part 2

// 1. We can retrieve the list of rovers from
// https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=API_KEY

// 2 create GET endpoint for the rovers

const router = express.Router();

router.get("/rovers", function (req, res) {

  console.log("Getting rovers ...");
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`;

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
  console.log(`Test backend is running on port ${port}`);
});

// 3 At "http://localhost:8000/rovers" we can see the JSON with information about rovers
