import axios from "axios"

function AddTasks() {
    const fromHandle = async (e : any) => {
        e.preventDefault()
        console.log(e.target.task.value)
        const res = await axios.post('http://127.0.0.1:8000/tasks/',{title : e.target.task.value})
        console.log(res.data)
        window.location.reload()
    }
  return (
    <form className="max-w-2xl mx-auto flex flex-col items-center py-5" onSubmit={fromHandle}>
        <input type="text" className="w-full py-1 border outline-none" name="task"/>
        <button type="submit" className="w-full border py-2 my-3">ADD</button>
    </form>
  )
}

export default AddTasks