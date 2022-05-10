import {Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import React, {useState} from "react";
import Button from "@mui/material/Button";

/** params {
 *  isOpen - state открытия дилога
 *  setIsDialogOpen - state открытия дилога
 *  item {
 *      type - тип сообщения
 *      text - текст сообщения
 *  }
 *  } */
export function EditNodeDialog(params) {
    const { isOpen, setIsOpen, item } = params
    const [newText, setNewText] = useState(item.text);

    function handleClose() {
        setIsOpen(false)
    }

    function handleTextChange(event) {
        setNewText(event.target.value);
    }

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>{item.type}</DialogTitle>
            <DialogContent>
                <TextField
                    required={true}
                    multiline
                    sx={{width: 500}}
                    maxRows={10}
                    margin="normal"
                    autoFocus
                    type="text"
                    fullWidth
                    onChange={handleTextChange}
                    defaultValue={item.text}
                />
            </DialogContent>
            <Button
                // onClick={() => }
                disabled={true}
            >
                Добавить
            </Button>
            <Button onClick={handleClose}>
                Назад
            </Button>
        </Dialog>
    )
}
