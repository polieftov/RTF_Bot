import {DialogTreeNode} from "./DialogTreeNode";

import('./TreeStyles.scss')

export function DialogTree(params) {
    return (
        <div>
            <ul className="tree">

                <li>
                    <DialogTreeNode type={'Приветствие'} text={'Hello u'}/>
                </li>
                <ul>
                    <li>
                        <div className="sticky">Завершение диалога</div>
                    </li>
                    <li>
                        <div className="sticky">Выбор специальности</div>

                        <ul>
                            <li>
                                <div className="sticky">Прикладная информатика</div>
                                <ul>

                                    <li>
                                        <div className="sticky">Выбор информации</div>
                                        <ul>
                                            <li>
                                                <div>Условия приема</div>
                                            </li>
                                            <li>
                                                <div>Количество мест</div>
                                            </li>
                                            <li>
                                                <div>Проходные баллы</div>
                                            </li>
                                            <li>
                                                <div>Программа обучения</div>
                                            </li>
                                            <li>
                                                <div>Профессии</div>
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
