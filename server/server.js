const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
 
app.get('/api/f1/2023/:circuit/:driver/qualifying', async (req, res) => {
    try {
        const { circuit, driver } = req.params;
        const response = await axios.get(`http://ergast.com/api/f1/2023/circuits/${circuit}/drivers/${driver}/qualifying.json`);
        res.json(response.data);
    } catch (error) {
        console.error("Error getting drivers qualifying data:", error);
        res.status(500).json({error: "Error"});
    }
});

app.get('/api/f1/2023/:circuit/:driver/results', async (req, res) => {
    try {
      const { circuit, driver } = req.params;
      const response = await axios.get(`http://ergast.com/api/f1/2023/circuits/${circuit}/drivers/${driver}/results.json`);
      res.json(response.data);
    } catch (error) {
      console.error("Error getting drivers race data:", error);
      res.status(500).json({error: "Error"});
    }
});


app.listen(5000, () => {console.log("Server started on port 5000")})

