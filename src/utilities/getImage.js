import placeholder from "../placeholder.jpg";

export function getImage(path, width){
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` 
    : placeholder; 
}