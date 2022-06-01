import {useState, useEffect} from "react";
import Menu from "../Menu/menu";
import React from "react";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

export function StatisticsPage(props) {
    const items = [{value: "Главная", href: '/main', icon: "home"},
        {value: "Статистика", href: '/stat', icon: "analytics"}]

    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        getStatistics()
    }, [])

    //Получение всех записей statistics
    async function getStatistics() {
        return await fetch(`http://localhost:${process.env.PORT || 8000}/api/statistics`)
            .then(response => {
                return response.json();
            }).then(result => {
                console.log('result')
                console.log(result)
                setStatistics(result)
            })
    }

    function fillTable() {
        if (statistics.data)
            return (
                statistics.data.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.alice_question}
                            </TableCell>
                            <TableCell align="right">{row.user_answer}</TableCell>
                            <TableCell align="right">{row.alice_answer}</TableCell>
                            <TableCell align="right">{formatDateTime(row.answer_timestamp)}</TableCell>
                            <TableCell align="right">{isMessageTypeMiss(row.message_type)}</TableCell>
                        </TableRow>
                    )
                )
            )
    }

    //форматирует дату для вывода
    function formatDateTime(date) {
        return date.replace(/T/, ' ').replace(/\..+/, '')
    }

    //понял ли бот сообщение пользователя //10 означает что бот не понял
    function isMessageTypeMiss(message_type) {
        if (message_type === 10)
            return "Нет"
        else
            return "Да"
    }

    return (
        <div className="App">
            <div className="SideMenu">
                <Menu header={"Меню"} items={items}/>
            </div>
            <div className="stat_page">
                <Paper sx={{maxHeight: '100%', overflow: 'auto', maxWidth: '100%'}}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Вопрос бота</TableCell>
                                <TableCell align="right">Ответ пользователя</TableCell>
                                <TableCell align="right">Ответ бота</TableCell>
                                <TableCell align="right">Время</TableCell>
                                <TableCell align="right">Бот понял</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fillTable()}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
    )
}
