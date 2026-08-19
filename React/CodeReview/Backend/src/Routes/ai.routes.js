const express = require('express');
const router = express.Router();
const { generateResponse } = require('../Controllers/ai.controller');

router.get('/get-response', async (req, res) => {
  
    const { prompt } = req.query;
    if (!prompt) {
      return res.status(400).send({ error: 'Prompt query parameter is required' });
    }
})

module.exports = router