import { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import './App.css'
import Card from './Card';

function App() {

  const [list, setList] = useState(JSON.parse(localStorage.getItem("task")) || []);

  const [task, setTask] = useState("");

  const [curr, setCurr] = useState(null);

  const data = localStorage.getItem("task");
  console.log(data);

  const submithandler = (e) => {
    e.preventDefault();

    task != "" ?

      curr ? setList((prev) => {

        const updatedList = prev.map((item) =>
          item === curr ? { ...item, text: task } : item
        );

        setCurr("");
        // localStorage.setItem('task', JSON.stringify([...prev]))
        return updatedList;
      })
        :
        setList((prev) => {
          const newTask = { text: task, color: colorChnage() };
          // localStorage.setItem('task', JSON.stringify([...prev, newTask]))
          return [...prev, newTask];
        })
      : null

    setTask("");

  }
  // console.log("Curr", curr);

  const deleteHandler = (index) => {
    setList((prev) => {
      const updatedList = prev.filter((e, idx) => idx !== index);
      // localStorage.setItem('task', updatedList)
      return updatedList;
    })
  }

  const editHandler = (index) => {
    setCurr(list[index]);
    setTask(list[index].text);
  }

  // console.log(list);
  // console.log("Task", task);

  const col = ['#af7ac5', '#73c6b6', '#fad7a0', '#d0ece7', '#2ecc71', '#95a5a6']

  const colorChnage = () => {
    const val = Math.floor(Math.random() * col.length);
    return col[val];
  }

  useEffect(() => {
    colorChnage()
    localStorage.setItem('task', JSON.stringify(list))
  }, [list])


  return (
    <>
      <main className='bg-stone-900 p-2 h-fit min-h-screen w-screen text-pink-50'>
        <nav className='px-2 py-1 text-center text-4xl'>
          <h1>To Do List</h1>
        </nav>

        <div className='w-full items-center gap-4 flex flex-col mt-4'>
          <form onSubmit={submithandler} className='flex gap-3 flex-wrap justify-center' action="">
            <input value={task} onChange={(e) => { setTask(e.target.value) }} className='w-80 px-3 py-1 bg-stone-800 rounded-lg' type="text" name="" placeholder='Enter your agenda...' id="" />
            <button className='bg-indigo-400 rounded-lg p-2 font-semibold text-black'>{curr ? "UPDATE" : "CREATE"}</button>
          </form>

          <div className='flex w-full list flex-wrap gap-2'>
            {
              list.length != 0 ?
                list.map((e, idx) => {
                  return (
                    <>

                      <Card
                        color={e.color}
                        text={e.text}
                        edit={() => { editHandler(idx) }}
                        deleteHandler={() => { deleteHandler(idx) }}
                      />

                    </>
                  )
                }) : <>
                  <p className='h-full text-center text-3xl content-center'>Add agenda for today....</p>
                </>
            }
          </div>

        </div>


      </main>
    </>
  )
}

export default App
