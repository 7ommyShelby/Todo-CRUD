import { useState } from 'react'
import './App.css'

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
        const updateIdx = list.indexOf(curr);
        list[updateIdx] = task;
        setCurr("");
        localStorage.setItem('task', JSON.stringify([...prev]))
        return [...prev];
      })
        :
        setList((prev) => {
          localStorage.setItem('task', JSON.stringify([...prev, task]))
          return [...prev, task];
        })
      : null

    setTask("");
  }

  const deleteHandler = (index) => {
    // setList(list.filter((e, idx) => idx != index));
    setList(() => {
      // prev.filter((e ,idx)=>idx!=idx);
      localStorage.setItem('task', JSON.stringify(list.filter((e, idx) => idx != index)))
      return list.filter((e, idx) => idx != index)
    })
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
            <button className='bg-indigo-400 rounded-lg p-2 font-semibold text-black'>{curr ? "UPDATE" : "CREATE"}</button>
          </form>

          <div className='md:w-[50%] w-full list overflow-y-scroll h-[80vh]'>
            {
              list.length != 0 ?
                list.map((e, idx) => {
                  return (
                    <>
                      <div className='flex justify-between m-2 flex-wrap border-b-[1px] border-stone-950 p-1'>
                        <p className='capitalize text-xl'>{e}</p>
                        <div className='flex gap-3'>
                          <button className='p-2 rounded-md bg-blue-500 hover:scale-110 hover:bg-blue-800 font-semibold' onClick={() => { editHandler(idx) }}>Edit</button>
                          <button className='p-2 rounded-md bg-red-600 hover:scale-110 hover:bg-red-800 font-semibold' onClick={() => { deleteHandler(idx) }}>Remove</button>
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
