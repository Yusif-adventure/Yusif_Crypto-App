import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    symbol: {
      type: String,
      required: [true, "Symbol is required"],
      unique: true,
      uppercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be positive"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    change24h: {
      type: Number,
      required: [true, "24h change is required"],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Crypto = mongoose.models.Crypto || mongoose.model("Crypto", cryptoSchema);
export default Crypto;