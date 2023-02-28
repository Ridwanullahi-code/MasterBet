import React, {useState} from 'react'
import { DateTime } from "luxon";
import Post from '../../functions/post';

const Predict = () => {
  const dt = DateTime.now().toISO().slice(0, 10);
  const URL = 'http://127.0.0.1:3000/api/v1/predictions/';

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
        values.five,
        values.six,
        values.seven,
        values.eight,
        values.nine,
        values.ten
        ].toString()
    }
    if (obj.predict.length > 0) {
      Post(URL, obj);
    }
  }
  
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'
        style={{gap:'12px'}}
      >
        <input required onChange={handleChange} name="one"  type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}}/>
        <input required onChange={handleChange} name="two" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="three" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="four" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="five" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="six" type="text" className='rounded-md p-2' style={{ border: "1px solid #dcdcdc" }} />
        <input required onChange={handleChange} name="seven" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="eight" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="nine" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <input required onChange={handleChange} name="ten" type="text" className='rounded-md p-2' style={{border:"1px solid #dcdcdc"}} />
        <button className='text-white p-2 rounded-lg text-1xl'
          style={{ backgroundColor: "blue", width: '50%' }}
          type="submit"
        >Submit</button>
      </form>
    </div>
  )
}

export default Predict
