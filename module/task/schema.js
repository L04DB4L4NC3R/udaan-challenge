const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
	description: String,
	assetID: String,
	workerID: String,
	taskID: String,
	timeOfAllocation: Date,
	taskToBePerformedBy: Date
})

const taskModel = mongoose.model("task", taskSchema)

module.exports.AddTask = (data) => {
	return taskModel.create(data)
}

module.exports.AllocateTask = (filter, patch) => {
	return taskModel.updateOne(filter, patch)
}


module.exports.GetTaskForWorker = (workerID) => {
	return taskModel.findOne({workerID: workerID})
}
