const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  symbol: {
    type: String,
  },
  name: {
    type: String,
  },
  marketCapUsd: String,
  priceUsd: String,
});

module.exports = mongoose.model("crypto", coinSchema);
