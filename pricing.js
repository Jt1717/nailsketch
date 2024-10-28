const express = require('express');
const router = express.Router();

// Example pricing logic (replace with your actual pricing rules)
router.post('/', async (req, res) => {
  const { designId, clientId } = req.body;

  try {
    const design = await Design.findById(designId);
    const client = await Client.findById(clientId);

    if (!design || !client) {
      return res.status(404).json({ message: 'Design or client not found' });
    }

    const basePrice = 20; // Example base price
    const designPrice = design.price || 0;
    const clientDiscount = client.discount || 0;
    const totalPrice = basePrice + designPrice - clientDiscount;

    res.json({ totalPrice });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
