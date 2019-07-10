const router = require("express").Router()
const {AddTask, AllocateTask, GetTaskForWorker} = require("../module/task/schema")

router.post("/add-task", (req, res, next) => {
	AddTask(req.body)
								.then(data => {
												res.json({data})
								}).catch(next)
})

router.post("/allocate-task", (req, res, next) => {
				AllocateTask({_id:req.body.taskId}, {
								assetID: req.body.assetId,
								workerId: req.body.workerID,
								timeOfAllocation: req.body.timeOfAllocation,
								taskToBePerformedBy: req.body.taskToBePerformedBy
				})
								.then(data => {
												res.json({data})
								}).catch(next)
})

router.get("/get-tasks-for-worker/:workerID", (req, res, next) => {
				GetTaskForWorker(req.params.workerID)
				.then(data => res.json(data))
				.catch(next)
})

module.exports = router
