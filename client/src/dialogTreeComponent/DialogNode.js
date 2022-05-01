import {NodeDialog} from "./NodeDialog";
import {useState} from "react";

import('./TreeStyles.scss')

/** params:
 * item {
 *     type - тип сообщения
 *     text - текст сообщения
 * }
 */
export function DialogNode(item) {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div className="sticky" onClick={() => setDialogOpen(true)}>
            {item.type}
            {NodeDialog({isOpen: dialogOpen, setIsDialogOpen: setDialogOpen, item: item})}
        </div>
    )
}
