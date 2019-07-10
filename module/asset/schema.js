const mongoose = require("mongoose")

const assetSchema = new mongoose.Schema({
	name: String
})

const assetModel = mongoose.model("asset", assetSchema)

module.exports.AddAsset = (data) => {
	return assetModel.create(data)
}

module.exports.ViewAssets = () => {
	return assetModel.findOne({})
}
