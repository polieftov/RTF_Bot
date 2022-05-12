import {DialogTreeNode} from "./DialogTreeNode";
import {MenuItem, Select} from "@mui/material";
import React, {useEffect, useState} from "react";

import('./TreeStyles.scss')

export function DialogTree(params) {
    const [faculty, setFaculty] = useState('');
    const [faculties, setFaculties] = useState([]);
    const [helloMsg, setHelloMsg] = useState({});
    const [byeMsg, setByeMsg] = useState({});
    const [facultyChooseMsg, setFacultyChooseMsg] = useState({});
    const [infoChoose, setInfoChoose] = useState({});
    const [conditions, setConditions] = useState({});
    const [count, setCount] = useState({});
    const [scores, setScores] = useState({});
    const [program, setProgram] = useState({});
    const [jobs, setJobs] = useState({});

    const handleChange = (event) => {
        console.log('update select')
        console.log(event.target.value)
        setFaculty(event.target.value);
    };

    //Получение ответов которые зависят от выбранной специальности
    async function getAnswerByFacultyAndMessageType(messageTypeId) {
        return await fetch(`http://localhost:8000/api/question/${faculty}/${messageTypeId}`)
            .then(response => {
                return response.json();
            })
    }

    //Получение ответов которые НЕ зависят от выбранной специальности
    async function getAnswerByMessageType(messageTypeId) {
        return await fetch(`http://localhost:8000/api/question/${messageTypeId}`)
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

        getAnswerByMessageType(9).then(h => setHelloMsg({text: h.data.text, id: h.data.id}))
        getAnswerByMessageType(8).then(b => setByeMsg({text: b.data.text, id: b.data.id}))
        getAnswerByMessageType(7).then(c => setFacultyChooseMsg({text: c.data.text, id: c.data.id}))
        getAnswerByMessageType(6).then(i => setInfoChoose({text: i.data.text, id: i.data.id}))
    }, [])

    useEffect(() => {
        getFaculties()

        getAnswerByFacultyAndMessageType(1).then(cond => {
            setConditions({text: cond.data.text, id: cond.data.id})
        })
        getAnswerByFacultyAndMessageType(2).then(c => setCount({text: c.data.text, id: c.data.id}))
        getAnswerByFacultyAndMessageType(3).then(s => setScores({text: s.data.text, id: s.data.id}))
        getAnswerByFacultyAndMessageType(4).then(p => setProgram({text: p.data.text, id: p.data.id}))
        getAnswerByFacultyAndMessageType(5).then(j => setJobs({text: j.data.text, id: j.data.id}))


    }, [faculty])

    function nodesDependsOnFaculty() {
        if (faculty)
            return (
                <ul>

                    <li>
                        <DialogTreeNode type={'Выбор информации'} text={infoChoose.text} id={infoChoose.id}
                                        setItem={setInfoChoose}/>
                        <ul>
                            <li>
                                <DialogTreeNode type={'Условия приема'} text={conditions.text} id={conditions.id}
                                                setItem={setConditions}/>
                            </li>
                            <li>
                                <DialogTreeNode type={'Количество мест'} text={count.text} id={count.id}
                                                setItem={setCount}/>
                            </li>
                            <li>
                                <DialogTreeNode type={'Проходные баллы'} text={scores.text} id={scores.id}
                                                setItem={setScores}/>
                            </li>
                            <li>
                                <DialogTreeNode type={'Программа обучения'} text={program.text} id={program.id}
                                                setItem={setProgram}/>
                            </li>
                            <li>
                                <DialogTreeNode type={'Профессии'} text={jobs.text} id={jobs.id} setItem={setJobs}/>
                            </li>
                        </ul>
                    </li>
                </ul>
            )
    }

    return (
        <div>
            <ul className="tree">

                <li>
                    <DialogTreeNode type={'Приветствие'} text={helloMsg.text} id={helloMsg.id} setItem={setHelloMsg}/>
                </li>
                <ul>
                    <li>
                        <DialogTreeNode type={'Завершение диалога'} text={byeMsg.text} id={byeMsg.id}
                                        setItem={setByeMsg}/>
                    </li>
                    <li>
                        <DialogTreeNode type={'Выбор специальности'} text={facultyChooseMsg.text}
                                        id={facultyChooseMsg.id} setItem={setFacultyChooseMsg}/>

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
                                {nodesDependsOnFaculty()}
                            </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </div>
    )
}
