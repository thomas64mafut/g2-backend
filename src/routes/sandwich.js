const express = require('express');
const router = express.Router();

const { addSandwich } = require('../controllers/sandwich');

router.post('/', addSandwich)

module.exports= router