import { Camera } from "./cameras";
import { Rover } from "./cameras";

export interface Photo {
    id: number;
    src: string;
}

interface InitialPhoto {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

function toSmallerPhoto (jsonPhoto: InitialPhoto): Photo {
    const photoObj: Photo = {
        id : jsonPhoto.id,
        src : jsonPhoto.img_src,
    };
    return photoObj;
}

export function reduceInfo(photos: InitialPhoto[]): Photo[] {
    const result: Photo[] = [];
    for (let i = 0; i < photos.length; i++){
        const photo: Photo = toSmallerPhoto(photos[i]);
        result.push(photo);
    }
    return result;
}