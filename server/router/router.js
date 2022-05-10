const express = require('express')

const aliceRoute = require('../router/alice/AliceRoute')
const apiRoutes = require('../router/api/APIRoutes')

const router = express.Router()
router.post('/', aliceRoute)

router.get('/api/question/:id', apiRoutes.getQuestionById)
router.put('/api/question/:id', apiRoutes.updateQuestionById)
router.get('/api/faculties', apiRoutes.getFaculties)
router.get('/api/answer/:faculty/:messageTypeId', apiRoutes.getAnswerByFacultyAndMessageType)
router.get('/api/answer/:messageTypeId', apiRoutes.getAnswerByMessageType)

module.exports = router
