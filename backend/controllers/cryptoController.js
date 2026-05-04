import Crypto from "../models/Crypto.js";

export const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ change24h: -1 });
    res.json({
      success: true,
      data: cryptos,
      count: cryptos.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cryptocurrencies",
      error: error.message,
    });
  }
};

export const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find()
      .sort({ change24h: -1 })
      .limit(10);
    res.json({
      success: true,
      data: gainers,
      count: gainers.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch top gainers",
      error: error.message,
    });
  }
};

export const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json({
      success: true,
      data: newListings,
      count: newListings.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch new listings",
      error: error.message,
    });
  }
};

export const getCryptoBySymbol = async (req, res) => {
  try {
    const { symbol } = req.params;
    const crypto = await Crypto.findOne({ symbol: symbol.toUpperCase() });

    if (!crypto) {
      return res.status(404).json({
        success: false,
        message: "Cryptocurrency not found",
      });
    }

    res.json({
      success: true,
      data: crypto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cryptocurrency",
      error: error.message,
    });
  }
};

export const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    // Validation
    if (!name || !symbol || !price || !image || change24h === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required: name, symbol, price, image, change24h",
      });
    }

    if (price < 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be positive",
      });
    }

    // Check if symbol already exists
    const existingCrypto = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (existingCrypto) {
      return res.status(400).json({
        success: false,
        message: "Cryptocurrency with this symbol already exists",
      });
    }

    const newCrypto = new Crypto({
      name: name.trim(),
      symbol: symbol.toUpperCase().trim(),
      price: parseFloat(price),
      image: image.trim(),
      change24h: parseFloat(change24h),
    });

    const savedCrypto = await newCrypto.save();

    res.status(201).json({
      success: true,
      message: "Cryptocurrency added successfully",
      data: savedCrypto,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).json({
        success: false,
        message: "Cryptocurrency with this symbol already exists",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to add cryptocurrency",
        error: error.message,
      });
    }
  }
};