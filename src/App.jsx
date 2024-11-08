import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [curr, setCurr] = useState(null);

  const submithandler = (e) => {
    e.preventDefault();

    task != "" ?

      curr ? setList((prev) => {
        const updateIdx = list.indexOf(curr);
        list[updateIdx] = task;
        setCurr("");
        return [...prev];
      })
        :
        setList((prev) => {
          return [...prev, task];
        })
      : null

    setTask("");
  }

  const deleteHandler = (index) => {
    setList(list.filter((e, idx) => idx != index));
  }

  const editHandler = (index) => {
    setCurr(list[index]);
    setTask(list[index]);
  }

  console.log(list);
  console.log(task);

  return (
    <>
      <main className='bg-stone-900 p-2 h-fit min-h-screen w-screen text-pink-50'>
        <nav className='px-2 py-1 text-center text-4xl'>
          <h1>To Do List</h1>
        </nav>

        <div className='w-full items-center gap-4 flex flex-col mt-4'>
          <form onSubmit={submithandler} className='flex gap-3 flex-wrap justify-center' action="">
            <input value={task} onChange={(e) => { setTask(e.target.value) }} className='w-80 px-3 py-1 bg-stone-800 rounded-lg' type="text" name="" placeholder='Enter your agenda...' id="" />
            <button className='bg-green-300 rounded-lg p-2 text-black'>{curr ? "UPDATE" : "CREATE"}</button>
          </form>

          <div className='w-[50%] list overflow-y-scroll h-[80vh]'>
            {
              list.length != 0 ?
                list.map((e, idx) => {
                  return (
                    <>
                      <div className='flex justify-between m-2 flex-wrap'>
                        <p className='capitalize text-xl'>{e}</p>
                        <div className='flex gap-3'>
                          <button className='p-2 rounded-lg bg-blue-500 hover:scale-110 hover:bg-blue-800' onClick={() => { editHandler(idx) }}>EDIT</button>
                          <button className='p-2 rounded-lg bg-red-600 hover:scale-110 hover:bg-red-800' onClick={() => { deleteHandler(idx) }}>DELETE</button>
                        </div>
                      </div>
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
