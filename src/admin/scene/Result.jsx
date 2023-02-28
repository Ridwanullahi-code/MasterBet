import React, {useState} from 'react'
import { DateTime } from "luxon";
import Post from '../../functions/post';
const URL = "http://127.0.0.1:3000/api/v1/homes";

const Result = () => {
  
  const dt = DateTime.now().toISO().slice(0, 10);
  const [values, setValues] = useState({})

  const handleChange = (event) => {
    setValues({
        ...values,
      [event.target.name]: event.target.value
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      date: dt,
      predict: [
        values.one,
        values.two ,
        values.three,
        values.four,
        ].toString()
    }
    if (obj.predict.length > 0) {
      Post(URL, obj);
    }
  }
  return (
    <div>
      <h2 className='text-center p-2 py-5'
        style={{ fontSize: "20px", fontWeight: "bolder" }}>
        Home Prediction</h2>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
      style={{gap:'20px'}}
      >
        <input onChange={handleChange} name="one"  type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}}/>
        <input onChange={handleChange} name="two" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input onChange={handleChange} name="three" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input onChange={handleChange} name="four" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <button className='text-white p-2 rounded-lg text-2xl'
          style={{ backgroundColor: "blue", width: '50%' }}
          type="submit"
        >Submit</button>
      </form>
    </div>
  )
}

export default Result;
