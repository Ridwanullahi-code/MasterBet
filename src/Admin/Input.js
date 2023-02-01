import React from 'react'

const Input = () => {
  return (
    <form>
      <div className='my-3 flex flex-col md:flex-row space-y-3 md:space-y-0'>
        <input className='rounded-md' type="text" name="number-1" />
        <input className='rounded-md' type="text" name="number-2" />
        <input className='rounded-md' type="text" name="number-3" />
      </div>
      <div className='my-3 flex flex-col md:flex-row space-y-3 md:space-y-0'>
        <input className='rounded-md' type="text" name="number-4" />
        <input className='rounded-md' type="text" name="number-5" />
        <input className='rounded-md' type="text" name="number-6" />
      </div>
      <div>
        <button className='rounded-md w-1/2 text-center border border-blue-600 p-2 px-4'>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Input
