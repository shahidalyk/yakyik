var express = require('express')
var router = express.Router()

router.get('/:resource', function(req, res, next){
	
	var resource = req.params.resource

	res.json({
		confirmation: 'success',
		resource: resource
	})
})

module.exports = router