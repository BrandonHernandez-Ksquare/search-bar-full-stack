// your server here!!
const express = require('express');
const videogames = (require('./mock-db/data.json'));
const app = express();

app.get('/', (req, res) => {
  res.send('Server is up!');
});

app.get('/video-games', (req, res) => {
    const { search } = req.query;

    console.log("search ->", search);

    if(!search){
        res
            .status(200)
            .send({result: videogames.videogames})
        }
    
    const filteredVideoGames = videogames.videogames.filter(({title, releaseYear, developer}) => 
        title.toLowerCase().includes(search) 
        || releaseYear.includes(search) 
        || developer.toLowerCase().includes(search)
        );
    

    res
        .status(200)
        .send({result: filteredVideoGames})
  });
  

app.listen(3000, () => {
  console.log('Server is on');
});