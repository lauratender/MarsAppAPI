import { Photo } from "./photo";

export function getHtml(photos: Photo[]): string {
    let result = "<div>"
    for (let i = 0; i < photos.length; i++){
        const url: string = photos[i].src;
        const id: number= photos[i].id;
        const photoStr: string = `<div> <img src = ${url} width = "200" height = "200"> <p>Picture id: ${id}</p></div>`;
        result = result.concat(photoStr);
    }
    result = result.concat("</div>");
    return result;
}