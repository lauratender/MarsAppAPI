export function checkCameraType (cameraType: string): void {
    if (!(cameraType.toLowerCase() in Cameras)){
        throw "Invalid camera type.";
    }
}

// Part 3 - 1
export enum Cameras {
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