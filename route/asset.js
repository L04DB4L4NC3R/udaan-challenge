const router = require('express').Router();
const { AddAsset, ViewAssets } = require('../module/asset/schema');

router.post('/add-asset', (req, res, next) => {
  AddAsset(req.body)
    .then((data) => {
      res.json({ data });
    }).catch(next);
});

router.get('/assets/all', (req, res, next) => {
  ViewAssets()
    .then((data) => {
      res.json({ data });
    }).catch(next);
});

module.exports = router;
