const client = require('./db')

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

module.exports = {
    getQuestionById,
    updateQuestionById
}
