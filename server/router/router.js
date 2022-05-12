const express = require('express')

const aliceRoute = require('../router/alice/AliceRoute')
const apiRoutes = require('../router/api/APIRoutes')

const router = express.Router()
router.post('/', aliceRoute)

router.get('/api/faculties', apiRoutes.getFaculties)
router.get('/api/question/:faculty/:messageTypeId', apiRoutes.getAnswerByFacultyAndMessageType)
router.get('/api/question/:messageTypeId', apiRoutes.getAnswerByMessageType)
router.post('/api/question/:answerId', apiRoutes.updateAnswerMessage)

module.exports = router
