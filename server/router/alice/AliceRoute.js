const client = require('./db')

// let cache = require('memory-cache')

aliceRoute = async (req, res) => {
    let request = req.body
    let response = {}
    initResponse(response, request)

    if (request.session.new) {
        client.query('select * from questions where id=1').then(queryRes => {//запрос на получение первого вопроса к пользователю (приветствие)
            let result = queryRes.rows[0]
            response.session_state = JSON.stringify(result)
            // cache.put(request.session.session_id, JSON.stringify(result))//записываем в кэш первый вопрос пользователю
            return sendResponse(res, response, result.text)//отвечаем начальной репликой навыка
        }).catch(er => { //обработка ошибок
            console.log(er)
        })
    } else {
        // let userData = JSON.parse(cache.get(request.session.session_id))//достаем кэш 1
        let userData = request.session_state
        let userAnswer = request.request.command //2
        client.query('seleсt * from questions q join answers answ on q.id=answ.next where answ.previous=$1 and answ.text=$2', [userData.id, userAnswer])//3 [ид последнего вопроса, текст ответа])
            .then(queryRes => {
                let result = queryRes.rows[0]
                // cache.put(request.session.session_id, JSON.stringify(result))//4
                response.session_state = JSON.stringify(result)
                return sendResponse(res, response, result.text)//5
        }).catch(err => {
            console.log(err)
            return sendResponse(res, response, 'Извините, я вас не понимаю.')
        })
        //1 узнаем наш последний вопрос к пользователю из кэша (сначала потестим получение/отправку данных сессии через session_state)
        //2 смотрим что пользователь ответил на наш последний вопрос
        //3 ищем подходящий новый вопрос по id  нашего последнего вопроса к пользователю и тексту ответа пользователя
        //4 кэшируем новый последний вопрос к пользователю
        //5 отправляем пользователю response
    }
}

function initResponse(response, request) {
    response.session_state = request.session_state
}

module.exports = aliceRoute
