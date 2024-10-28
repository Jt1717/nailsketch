const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific client by ID
router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client == null) {
      return res.status(404).json({ message: 'Cannot find client' });
    }
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new client
router.post('/', async (req, res) => {
  const client = new Client({
    name: req.body.name,
    // ... other client properties
  });
  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a client
router.put('/:id', async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedClient == null) {
      return res.status(404).json({ message: 'Cannot find client' });
    }
    res.json(updatedClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a client
router.delete('/:id', async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (deletedClient == null) {
      return res.status(404).json({ message: 'Cannot find client' });
    }
    res.json({ message: 'Client deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Design = require('../models/Design');

// Get all designs
router.get('/', async (req, res) => {
  try {
    const designs = await Design.find();
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific design by ID
router.get('/:id', async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (design == null) {
      return res.status(404).json({ message: 'Cannot find design' });
    }
    res.json(design);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new design
router.post('/', async (req, res) => {
  const design = new Design({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    // ... other design properties
  });
  try {
    const newDesign = await design.save();
    res.status(201).json(newDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a design
router.put('/:id', async (req, res) => {
  try {
    const updatedDesign = await Design.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedDesign == null) {
      return res.status(404).json({ message: 'Cannot find design' });
    }
    res.json(updatedDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a design
router.delete('/:id', async (req, res) => {
  try {
    const deletedDesign = await Design.findByIdAndDelete(req.params.id);
    if (deletedDesign == null) {
      return res.status(404).json({ message: 'Cannot find design' });
    }
    res.json({ message: 'Design deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
