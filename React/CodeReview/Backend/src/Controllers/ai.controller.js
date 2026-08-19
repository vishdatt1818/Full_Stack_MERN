
const aiService = require('../Services/ai.service');
 
module.exports = (req, res) => {
  const { prompt } = req.query;
    if (!prompt) {
      return res.status(400).send({ error: 'Prompt query parameter is required' });
    }
}