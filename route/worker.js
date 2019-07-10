const router = require("express").Router()
const {AddWorker} = require("../module/worker/schema")

router.post("/add-worker", (req, res, next) => {
	AddWorker(req.body)
								.then(data => {
												res.json({data})
								}).catch(next)
})

module.exports = router
