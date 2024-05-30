import styles from "@/styles/todo.module.scss";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Addtask from "@/component/Dialogs/Addtask";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Check } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Todo = () => {
  const [searchword, setSearchword] = useState("");
  const [taskStr, setTask] = useState("");
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [index, setIndex] = useState();

  useEffect(() => {
    const localData = localStorage.getItem("tasks");
    if (localData) {
      setTasks(JSON.parse(localData));
    }
  }, []);
  return (
    <div className={styles.todocontainer}>
      <div className={styles.todocontainer_main}>
        <span className={styles.todocontainer_main_head}>Things to do:</span>

        <div className={styles.todocontainer_main_textbar}>
          <div className={styles.todocontainer_main_textbar_search}>
            <input
              value={searchword}
              onChange={(e) => setSearchword(e.target.value)}
              placeholder="Search a task..."
            />
            <div className={styles.todocontainer_main_textbar_search_icon}>
              <SearchIcon />
            </div>
          </div>
          <div className={styles.todocontainer_main_textbar_task}>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              className={styles.todocontainer_main_textbar_task_button}
            >
              New task
            </Button>
          </div>
        </div>
        <div className={styles.todocontainer_main_line}></div>
        <div className={styles.todocontainer_main_alltask}>
          {tasks.length > 0 &&
            tasks
              .filter((task) =>
                String(task.task)
                  .toLocaleLowerCase()
                  .includes(searchword.toLocaleLowerCase())
              )
              .map((task, index) => {
                return (
                  <div
                    key={index}
                    className={styles.todocontainer_main_alltask_taskdiv}
                  >
                    <div
                      onClick={() => {
                        setTask(task.task);
                        setIndex(index);
                        setUpdate(true);
                        setOpen(true);
                      }}
                      className={styles.todocontainer_main_alltask_taskdiv_left}
                    >
                      <span
                        style={{
                          textDecoration: task.completed ? "line-through" : "",
                        }}
                      >
                        {task.task}
                      </span>
                    </div>
                    <div
                      className={
                        styles.todocontainer_main_alltask_taskdiv_right
                      }
                    >
                      <div
                        className={
                          styles.todocontainer_main_alltask_taskdiv_right_tick
                        }
                        style={{
                          background: task.completed ? "" : "transparent",
                        }}
                        onClick={() =>
                          setTasks(
                            tasks.map((t) =>
                              t.task === task.task
                                ? {
                                    task: task.task,
                                    completed: !task.completed,
                                  }
                                : t
                            )
                          )
                        }
                      >
                        <CheckCircleOutlineIcon />
                      </div>
                      <div
                        className={
                          styles.todocontainer_main_alltask_taskdiv_right_delete
                        }
                        onClick={() => {
                          const localData = localStorage.getItem("tasks");
                          if (localData) {
                            const olddata = JSON.parse(localData);
                            localStorage.setItem(
                              "tasks",
                              JSON.stringify(
                                olddata.filter((t) => t.task !== task.task)
                              )
                            );
                          }
                          setTasks(tasks.filter((t) => t.task !== task.task));
                        }}
                      >
                        <DeleteForeverIcon />
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Addtask
        tasks={tasks}
        setTasks={setTasks}
        open={open}
        setOpen={setOpen}
        task={taskStr}
        setTask={setTask}
        update={update}
        setUpdate={setUpdate}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};
export default Todo;
