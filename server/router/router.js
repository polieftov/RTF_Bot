const express = require('express')

const aliceRoute = require('../router/alice/AliceRoute')
const apiRoutes = require('../router/api/APIRoutes')

const router = express.Router()
router.post('/', aliceRoute.aliceRoute)

router.get('/api/question/:id', apiRoutes.getQuestionById)
router.put('/api/question/:id', apiRoutes.updateQuestionById)

module.exports = router
