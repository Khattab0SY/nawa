import React from 'react'
import data from './json/nawaqd.json'
import { useNavigate } from 'react-router'

const App = () => {
  const navigate = useNavigate()
  const handleTo = (id) => {
    navigate(`/${id}`)
  }
  return (
    <div className='h-screen flex flex-col justify-center items-start p-2 py-4'>
      <div className='h-[10%] w-full flex flex-col justify-center items-center bg-bg1 rounded-2xl shadow-2xl border-x-2 border-primary hover:bg-black duration-300 cursor-pointer'>
        <h1 className='text-3xl'>نواقض الإسلام</h1>
        <p>الموقع بدون تصميم</p>
      </div>
      <div className='h-[90%] w-full p-4 overflow-y-auto flex flex-col gap-4 items-center'>
          {data.map((i) => {
            return(
              <button key={i.id} onClick={() =>  handleTo(i.id)} className='h-16 w-full bg-bg1 text-lg pb-1 rounded-xl shadow-md hover:bg-bg1/75 duration-500'> {i.name} </button>
            )
          })}
      </div>
    </div>
  )
}

export default App