const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjVkMzg3NTA1NWVlNDI0ZWVlNjJlYjcyYTYyZjZhMCIsInN1YiI6IjYyMDk0NGY1MWNhYzhjMDAxYjMyZmQ0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKoWsN8HiPahEHtxcTvrmIKcquPtAERcfAma45ebmt4",
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then(result => result.json());
}