const express = require('express');
const cors = require('cors');
const data = require('./mock-db/data.json');

const PORT = 9090;
const app = express();

app.use(express.json());
app.use(cors({}));

app.get('/video-games', (req, res) => {
    const like = req.query['like']?.toLowerCase();

    if (!like) {
        res
          .status(200)
          .send({results: data.videogames })
    }

    const filterCondition = ({ title, releaseYear, developer }) => title.toLowerCase().includes(like) || releaseYear.toString().includes(like) || developer.toLowerCase().includes(like);

    const filteredVideoGames = data.videogames.filter(filterCondition);

    res
      .status(200)
      .send({ results: filteredVideoGames })

});

app.listen(PORT, () => {
    console.log("Listening port", PORT)
})
