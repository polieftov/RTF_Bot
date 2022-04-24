const client = require('../database/db')

const aliceRoute = async (req, res) => {
    console.log('START CREATING RESPONSE')
    let request = req.body
    let response = {
        response: {
            text: {},
            end_session: false
        },
        session: {
            session_id: req.body.session_id,
            message_id: req.body.message_id,
            user_id: req.body.user_id
        },
        version: req.body.version,
        session_state: {
            value: {}
        }
    }

    if (request.session.new) {
        client.query('select * from questions where id=1').then(async queryRes => {//запрос на получение первого вопроса к пользователю (приветствие)
            let result = queryRes.rows[0]
            console.log('HELLO MSG: ' + JSON.stringify(result))
            response.session_state.value = JSON.stringify(result)//записываем в первый вопрос пользователю

            let buttons = await createButtons(result)

            console.log('CHECK BTNS: ' + JSON.stringify(buttons))

            return sendResponse(res, response, result.text, buttons)//отвечаем начальной репликой навыка

        }).catch(er => { //обработка ошибок
            console.log(er)
        })
    } else {

        let userData = JSON.parse(request.state.session.value)
        console.log('userData: ' + JSON.stringify(userData))

        let userAnswer = request.request.command //2
        console.log('userAnswer: ' + JSON.stringify(userAnswer))

        if (userAnswer === 'помощь')
            return helpAnswer(res, response)

        userAnswer = '%' + userAnswer + '%'

        client.query('select q.id, q.text, q.is_dialog_end from questions q join answers answ on q.id=answ.child where answ.parent=$1 and lower(answ.text) like $2', [userData.id, userAnswer])//3 [ид последнего вопроса, текст ответа])
            .then(async queryRes => {

                if (!queryRes) {
                    console.log('QUERY FAILED: ' + 'select q.id, q.text, q.is_dialog_end from questions q join answers answ on q.id=answ.child where answ.parent=$1 and lower(answ.text)=$2, [userData.id, userAnswer]')
                    return questionIfSomethingWrong(res, response)
                }
                console.log('QUERY: ' + 'select q.id, q.text, q.is_dialog_end from questions q join answers answ on q.id=answ.child where answ.parent=$1 and lower(answ.text)=$2', [userData.id, userAnswer])

                let result = queryRes.rows[0]
                console.log('QUERY RESULT: ' + JSON.stringify(result))

                response.session_state.value = JSON.stringify(result)

                let buttons = await createButtons(result)

                return sendResponse(res, response, result.text, buttons, result.is_dialog_end)//5
            }).catch(err => {
            console.log('ERROR :' + err)
            return questionIfSomethingWrong(res, response)
        })
        //1 узнаем наш последний вопрос к пользователю из кэша (сначала потестим получение/отправку данных сессии через session_state)
        //2 смотрим что пользователь ответил на наш последний вопрос
        //3 ищем подходящий новый вопрос по id  нашего последнего вопроса к пользователю и тексту ответа пользователя
        //4 кэшируем новый последний вопрос к пользователю
        //5 отправляем пользователю response
    }
}

function helpAnswer(res, response) {
    console.log
    client.query('select * from questions where id=25').then(async queryRes => {
        let result = queryRes.rows[0]
        console.log('QUERY RESULT: ' + JSON.stringify(result))

        response.session_state.value = JSON.stringify(result)

        let buttons = await createButtons(result)

        return sendResponse(res, response, result.text, buttons, result.is_dialog_end)

    })
}

//если что-то пошло не так идем отправляем сообщение что "это не моя специализация..."
function questionIfSomethingWrong(res, response) {
    console.log('SOMETHING WRONG')
    console.log('QUERY: select * from questions where id=5')
    client.query('select * from questions where id=5').then(async queryRes => {
        let result = queryRes.rows[0]
        console.log('QUERY RESULT: ' + JSON.stringify(result))

        response.session_state.value = JSON.stringify(result)

        let buttons = await createButtons(result)

        return sendResponse(res, response, result.text, buttons, result.is_dialog_end)

    })
}

function sendResponse(res, response, text, buttons, isDialogEnd) {
    response.response.text = text;
    response.response.end_session = isDialogEnd;

    if (buttons) {
        response.response.buttons = buttons;
    }

    return res.json(response);
}

function createButtons(lastAnswer) {
    return new Promise(function (resolve, reject) {
        let buttons = []
        if (lastAnswer.id !== 1)
            buttons.push({title: 'помощь', hide: true})
        client.query('select text from answers where parent=$1', [lastAnswer.id]).then(queryRes => {

            console.log('QUERY TO CREATE BTNS: '+'select text from answers where parent=$1, [lastAnswer.id]')
            console.log('RESULT: '+ JSON.stringify(queryRes.rows))

            for (let row of queryRes.rows) {
                console.log('ROW: ' + JSON.stringify(row.text))
                console.log('BTNS: ' + JSON.stringify(buttons))

                buttons.push({
                    title: row.text,
                    hide: true
                })
            }
            resolve(buttons)
        }).catch(err => {
            console.log(err)
        })
    })
}

module.exports = aliceRoute
