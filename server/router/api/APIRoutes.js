const client = require('../database/db')

getQuestionById = (req, res) => {
    client.query('select * from questions where id=$1', [req.params.id]).then(queryRes => {
        let result = queryRes.rows[0]
        if (!result)
            return res.status(404).json({ success: false, error: 'Question not found' })
        return res.status(200).json({ success: true, data: result })
    }).catch(err => {
        console.log(err)
    })
}

getAnswerById = (req, res) => {
    client.query('select * from answers where id=$1', [req.params.id]).then(queryRes => {
        let result = queryRes.rows[0]
        if (!result)
            return res.status(404).json({ success: false, error: 'Answer not found' })
        return res.status(200).json({ success: true, data: result })
    }).catch(err => {
        console.log(err)
    })
}

updateQuestionById = (req, res) => {//обновление возвращает измененный объект
    client.query('update questions set text=$1 where id=$2 returning id, text', [req.params.text, req.params.id]).then(queryRes => {
        let result = queryRes.rows[0]
        if (!result)
            return res.status(404).json({ success: false, error: 'Question not found' })
        return res.status(200).json({ success: true, data: result })
    }).catch(err => {
        console.log(err)
    })
}

getFaculties = (req, res) => {
  client.query('select * from faculty').then(queryRes => {
      return res.status(200).json({ success: true, data: queryRes.rows })
  }).catch(err => {
      console.log(err)
  })
}

getAnswerByFacultyAndMessageType = (req, res) => {
    console.log(req.params)
  client.query('select * from questions q join faculty f on f.id = q.faculty where f."name" = $1 and q.message_type = $2',
      [req.params['faculty'], req.params['messageTypeId']]).then(queryRes => {
      return res.status(200).json({ success: true, data: queryRes.rows[0] })
  }).catch(err => {
      console.log(err)
  })
}

getAnswerByMessageType = (req, res) => {
    client.query('select * from questions q where q.message_type = $1',
        [req.params['messageTypeId']]).then(queryRes => {
        return res.status(200).json({ success: true, data: queryRes.rows[0] })
    }).catch(err => {
        console.log(err)
    })
}



module.exports = {
    getQuestionById,
    updateQuestionById,
    getFaculties,
    getAnswerByFacultyAndMessageType,
    getAnswerByMessageType
}
