const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use('/static', express.static('images'));

app.get('/api/data', (req, res) => {
  res.json({
    locations: [
      {
        name: "Location 1",
        image: "/static/aablade.png"
      },
      {
        name: "Location 2",
        image: "/static/aalogo.jpg"
      },
    ]
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
