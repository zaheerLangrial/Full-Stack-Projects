import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [students , setStudents] = useState([])
  useEffect(() => {
    getAllStudents()
  } , [])

  const getAllStudents = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/student/')
      setStudents(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Emails</h1>
      {
        students.map((stu : {id : number , email : string , name : string}) => {
          return (
            <h2 key={stu.id}>{stu.email}</h2>
          )
        }) 
      }
    </>
  )
}

export default App
