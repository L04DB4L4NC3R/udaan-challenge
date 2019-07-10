const mongoose = require("mongoose")

const workerSchema = new mongoose.Schema({
	name: String
})

const workerModel = mongoose.model("worker", workerSchema)

module.exports.AddWorker = (data) => {
	return workerModel.create(data)
}

