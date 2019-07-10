const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: String,
});

const assetModel = mongoose.model('asset', assetSchema);

module.exports.AddAsset = data => assetModel.create(data);

module.exports.ViewAssets = () => assetModel.findOne({});
