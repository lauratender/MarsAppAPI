import express, { Express } from "express";
import axios from "axios";
import { API_KEY } from "./info";
import { checkCameraType } from "./cameras";
import { reduceInfo } from "./photo";
import { getHtmlContentFromPhotos } from "./getHtmlContentFromPhotos";

export const router = express.Router();

// Part 2

router.get("/rovers", function (req, res) {

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

// Part 3 - 4

router.get("/rovers/:rover/photos/:camera", function (req, res) {

    const roverName: string = req.params.rover;
    const cameraType: string = req.params.camera;
  
    checkCameraType(cameraType);

    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&camera=${cameraType}&api_key=${API_KEY}`;

    axios.get(URL)
         .then((response) => {
            const result = response.data;
            const resPhotos = reduceInfo(result.photos);

            res.setHeader("Content-type", "text/html");
            const resHtml: string = getHtmlContentFromPhotos(resPhotos);
            res.send(resHtml);
         })
         .catch(error => {
            console.log(error)
         });
});