import axios from "axios";
import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://127.0.0.1:8000/tasks/");
    setTasks(res.data);
  };
  const deleteTask = async (id : number) => {
    const res = await axios.delete(`http://127.0.0.1:8000/tasks/${id}/`)
    console.log(res)
    window.location.reload()
    // setTasks(res.data)
  };
  const IsCompleteTask = async (obj : {id : number , completed : boolean}) => {
    const res = await axios.patch(`http://127.0.0.1:8000/tasks/${obj.id}/` , {completed : !obj.completed})
    window.location.reload()

  }
  return (
    <ul className="max-w-2xl mx-auto flex flex-col gap-3">
      {tasks.map((task:{id : number , title : string , completed : boolean}) => {
        return (
          <li key={task.id} className="flex justify-between items-center">
            <p>{task.title}</p>
            <div>
              <button type="submit" className="px-5 border py-2 my-3" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
              <button type="submit" className="px-5 border py-2 my-3" onClick={() => IsCompleteTask({id : task.id , completed : task.completed})}>
                IsComplete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Tasks;
