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
                        <DialogTreeNode type={'Завершение диалога'} text={'Завершение '}/>
                    </li>
                    <li>
                        <DialogTreeNode type={'Выбор специальности'} text={'Выбор'}/>

                        <ul>
                            <li>
                                <DialogTreeNode type={'Прикладная информатика'} text={'Прикладная'}/>
                                <ul>

                                    <li>
                                        <DialogTreeNode type={'Выбор информации'} text={'информации'}/>
                                        <ul>
                                            <li>
                                                <DialogTreeNode type={'Условия приема'} text={'Условия'}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Количество мест'} text={'Количество'}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Проходные баллы'} text={'Проходные'}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Программа обучения'} text={'Программа'}/>
                                            </li>
                                            <li>
                                                <DialogTreeNode type={'Профессии'} text={'Профессии'}/>
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
