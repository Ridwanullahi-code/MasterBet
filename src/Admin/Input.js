import React from 'react'

const Input = () => {
  return (
    <form>
      <div className='my-3 flex flex-col md:flex-row space-y-3 md:space-y-0'>
        <input className='rounded-md' type="text" name="number-1" style={{margin:'10px'}} />
        <input className='rounded-md' type="text" name="number-2" style={{margin:'10px'}} />
        <input className='rounded-md' type="text" name="number-3" style={{margin:'10px'}} />
      </div>
      <div className='my-3 flex flex-col md:flex-row space-y-3 md:space-y-0'>
        <input className='rounded-md' type="text" name="number-4" style={{margin:'10px'}} />
        <input className='rounded-md' type="text" name="number-5" style={{margin:'10px'}} />
        <input className='rounded-md' type="text" name="number-6" style={{margin:'10px'}} />
      </div>
      <div>
        <button className='rounded-md w-1/2 text-center p-2 px-4' style={{
          border: '1px solid blue',
          background: 'blue', color:'whitesmoke',
          margin:'10px',
        }}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Input
