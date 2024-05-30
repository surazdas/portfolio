import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "@/styles/todo.module.scss";

const Addtask = ({
  index,
  setIndex,
  update,
  setUpdate,
  task,
  setTask,
  tasks,
  setTasks,
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
    setUpdate(false);
    setTask("");
  };

  const handleAdd = () => {
    const localData = localStorage.getItem("tasks");
    if (localData) {
      const olddata = JSON.parse(localData);
      localStorage.setItem(
        "tasks",
        JSON.stringify([...olddata, { task: task, completed: false }])
      );
    } else {
      localStorage.setItem(
        "tasks",
        JSON.stringify([{ task: task, completed: false }])
      );
    }
    setTasks([...tasks, { task: task, completed: false }]);
    handleClose();
  };

  const handleupdate = () => {
    const localData = localStorage.getItem("tasks");
    if (localData) {
      const olddata = JSON.parse(localData);
      localStorage.setItem(
        "tasks",
        JSON.stringify(
          olddata.map((t, i) => (i === index ? { ...t, task: task } : t))
        )
      );
    }
    setTasks(tasks.map((t, i) => (i === index ? { ...t, task: task } : t)));
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth={"md"}>
        <DialogTitle className={styles.Dialog}>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="task"
            name="task"
            label="Task Details"
            type="text"
            fullWidth
            variant="standard"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={styles.Dialog_cancle}>
            Cancel
          </Button>
          <Button
            onClick={() => (update ? handleupdate() : handleAdd())}
            className={styles.Dialog_Add}
            type="submit"
          >
            {update ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Addtask;
