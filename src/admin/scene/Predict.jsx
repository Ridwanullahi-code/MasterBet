import React, {useState} from 'react'

const Predict = () => {
  
  const [values, setValues] = useState({})
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <h2 className='text-center p-2 py-5'
        style={{ fontSize: "20px", fontWeight: "bolder" }}>
        Prediction</h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
      style={{gap:'20px'}}
      >
        <input onChange={handleChange} name="predict-one"  type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}}/>
        <input onChange={handleChange} name="predict-two" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input onChange={handleChange} name="predict-three" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input onChange={handleChange} name="predict-four" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input onChange={handleChange} name="predict-five" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input onChange={handleChange} name="predict-six" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <button className='text-white p-2 rounded-lg text-2xl'
          style={{ backgroundColor: "blue", width: '50%' }}
          type="submit"
        >Submit</button>
      </form>
    </div>
  )
}

export default Predict
