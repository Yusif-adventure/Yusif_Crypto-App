import express from "express";
import {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  getCryptoBySymbol,
  addCrypto,
} from "../controllers/cryptoController.js";

const router = express.Router();

// GET /crypto - Get all tradable cryptocurrencies
router.get("/", getAllCryptos);

// GET /crypto/gainers - Get top gainers
router.get("/gainers", getTopGainers);

// GET /crypto/new - Get new listings
router.get("/new", getNewListings);

// GET /crypto/:symbol - Get cryptocurrency by symbol
router.get("/:symbol", getCryptoBySymbol);

// POST /crypto - Add new cryptocurrency
router.post("/", addCrypto);

export default router;