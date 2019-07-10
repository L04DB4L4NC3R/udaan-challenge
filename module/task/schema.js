const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: String,
  assetID: String,
  workerID: String,
  taskID: String,
  timeOfAllocation: Date,
  taskToBePerformedBy: Date,
});

const taskModel = mongoose.model('task', taskSchema);

module.exports.AddTask = data => taskModel.create(data);

module.exports.AllocateTask = (filter, patch) => taskModel.updateOne(filter, patch);


module.exports.GetTaskForWorker = workerID => taskModel.findOne({ workerID });
