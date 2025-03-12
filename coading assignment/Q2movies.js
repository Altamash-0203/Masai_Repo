const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
  ];
  
  let hours=movies.map(time=>({
      ...time,
      watchTime:time.watchTime/60}))

  let rating=hours.filter(high=>high.rating>7.5)
  
  let totalwatch=rating.reduce((acc,cv)=>acc+cv.watchTime,0)
  
  
const best = rating.map(det => ({
    ...det,
    name: rating.title,
    watchTime: hours.watchTime }))

console.log("high rated movies with watchtime",rating)
console.log("total watch time:",totalwatch.toFixed(2))
