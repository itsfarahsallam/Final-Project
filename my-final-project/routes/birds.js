const express = require('express');
const axios = require('axios');
const router = express.Router();

const EBIRD_API_KEY = 'ni9u96j4iq8f'

router.get('/recent', async (req, res) => {
  try {
    const { lat, lng, dist } = req.query;
    const response = await axios.get('https://api.ebird.org/v2/data/obs/geo/recent', {
      params: { lat, lng, dist },
      headers: { 'X-eBirdApiToken': EBIRD_API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from eBird API' });
  }
});

module.exports = router;
