import {DialogTreeNode} from "./DialogTreeNode";
import {MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";

import('./TreeStyles.scss')

export function DialogTree(params) {
    const [faculty, setFaculty] = useState('');
    const [faculties, setFaculties] = useState([]);
    const [helloMsg, setHelloMsg] = useState('');
    const [byeMsg, setByeMsg] = useState('');
    const [facultyChooseMsg, setFacultyChooseMsg] = useState('');
    const [conditions, setConditions] = useState('');
    const [count, setCount] = useState('');
    const [scores, setScores] = useState('');
    const [program, setProgram] = useState('');
    const [jobs, setJobs] = useState('');

    const handleChange = (event) => {
        console.log('update select')
        console.log(event.target.value)
        setFaculty(event.target.value);
    };

    //Получение ответов которые зависят от выбранной специальности
    async function getAnswerByFacultyAndMessageType(messageTypeId) {
        return await fetch(`http://localhost:8000/api/answer/${faculty}/${messageTypeId}`)
            .then(response => {
                return response.json();
            })
    }

    //Получение ответов которые НЕ зависят от выбранной специальности
    async function getAnswerByMessageType(messageTypeId) {
        return await fetch(`http://localhost:8000/api/answer/${messageTypeId}`)
            .then(response => {
                return response.json();
            })
    }

    async function getFaculties() {
        await fetch(`http://localhost:8000/api/faculties`)
            .then(response => {
                return response.json();
            })
            .then(faculties => {
                setFaculties(faculties.data)
            })
    }

    useEffect(() => {
        getFaculties()

        getAnswerByMessageType(9).then(h => setHelloMsg(h.data.text))
        getAnswerByMessageType(8).then(b => setByeMsg(b.data.text))
        getAnswerByMessageType(7).then(c => setFacultyChooseMsg(c.data.text))
    }, [])

    useEffect(() => {
        getFaculties()

        getAnswerByFacultyAndMessageType(1).then(cond => setConditions(cond.data.text))
        getAnswerByFacultyAndMessageType(2).then(c => setCount(c.data.text))
        getAnswerByFacultyAndMessageType(3).then(s => setScores(s.data.text))
        getAnswerByFacultyAndMessageType(4).then(p => setProgram(p.data.text))
        getAnswerByFacultyAndMessageType(5).then(j => setJobs(j.data.text))


    }, [faculty])

    return (
        <div>
            <ul className="tree">

                <li>
                    <DialogTreeNode type={'Приветствие'} text={helloMsg}/>
                </li>
                <ul>
                    <li>
                        <DialogTreeNode type={'Завершение диалога'} text={byeMsg}/>
                    </li>
                    <li>
                        <DialogTreeNode type={'Выбор специальности'} text={facultyChooseMsg}/>

                        <ul>
                            <li>
                                <Select
                                    className="node-with-select"
                                    value={faculty}
                                    displayEmpty
                                    inputProps={{'aria-label': 'Without label'}}
                                    onChange={handleChange}
                                >
                                    {faculties.map(f =>
                                        <MenuItem value={f.name}>{f.name}</MenuItem>
                                    )}
                                </Select>
                                <ul>

                                    <li>
                                        <DialogTreeNode type={'Выбор информации'} text={'информации'}/>
                                        <ul>
                                            <li>
                                                <DialogTreeNode type={'Условия приема'} text={conditions}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Количество мест'} text={count}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Проходные баллы'} text={scores}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Программа обучения'} text={program}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Профессии'} text={jobs}/>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </div>
    )
}
