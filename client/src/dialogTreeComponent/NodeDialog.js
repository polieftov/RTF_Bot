import {Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

/** params {
 *  isOpen - state открытия дилога
 *  setIsDialogOpen - state открытия дилога
 *  item {
 *      type - тип сообщения
 *      text - текст сообщения
 *  }
 *  } */
export function NodeDialog(params) {
    const [text, setText] = useState(params.item.text);

    function handleTextChange(event) {
        setText(event.target.value);
    }

    return (
        <Dialog open={params.isOpen} onClose={() => params.setIsDialogOpen(false)}>
            <DialogTitle>params.item.type</DialogTitle>
            <DialogContent>
                <TextField
                    required={true}
                    margin="normal"
                    autoFocus
                    type="text"
                    fullWidth
                    onChange={handleTextChange}
                    defaultValue={params.item.text}
                />
            </DialogContent>
            <Button
                // onClick={() => }
                disabled={true}
            >
                Добавить
            </Button>
            <Button onClick={() => params.setIsDialogOpen(false)}>
                Назад
            </Button>
        </Dialog>
    )
}
