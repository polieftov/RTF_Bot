import {EditNodeDialog} from "./EditNodeDialog";
import {useState} from "react";

import('./TreeStyles.scss')

/** params:
 * item {
 *     type - тип сообщения
 *     text - текст сообщения
 * }
 */
export function DialogTreeNode(item) {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div className="sticky" onClick={() => setDialogOpen(true)}>
            {item.type}
            {EditNodeDialog({isOpen: dialogOpen, setIsDialogOpen: setDialogOpen, item: item})}
        </div>
    )
}
