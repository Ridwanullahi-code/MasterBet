import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { DateTime } from "luxon";
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1/homes';

const getAPI = async() => {
  return await axios.get(URL)
  .then((response) => response.data)
}
const Pick = ({ head, title, text, summary }) => {
    const [value, setValue] = useState([])

    useEffect(() => {
        let mounted = true;
        getAPI().then((item) => {
            setValue(item);
        if (mounted) {
            setValue(item)
        }
        })
        return () => (mounted = false);
    }, [])

    const dt = DateTime.now().toISO().slice(0, 10);
    const ys = `${dt.slice(0, 8)}${dt.slice(8, 10) - 1}`;
    
    let selected;
    if (value.length > 0) {
        value.forEach((item) => {
            if (item.date === dt) {
                selected = item
            } else if (item.date === ys) {
               selected = item 
            } else {
                selected = []
            }
        })
    }

    const data = selected?.predict.split(',')
    
  return (
    <div className='pick bg mx-auto'>
          <h1 className='head px-3 py-4 font-bold text-lg'>{head}</h1>
          <div className="px-3 py-3 space-y-4">
              <h2 className='font-bold'>{title}</h2>
              <p className='text-gray-600 text-sm'>{text}</p>
              <ul className="hot_picks flex space-x-4">
                  {data && data.map((item, index) => (
                      <li key={ index} className="list circle draw">{item}</li>
                  ))}
              </ul>
              <p>{summary}</p>
        <Button value="Bet Here" />
          <hr className='bg-gray-200'/>
      </div>
      <div className="px-3 py-3 space-y-4">
              <h2 className='font-bold'>{title}</h2>
              <p className='text-gray-600 text-sm'>{text}</p>
              <ul className="hot_picks flex space-x-4">
                {data && data.map((item, index) => (
                    <li key={ index} className="list circle draw">{item}</li>
                ))}
              </ul>
              <p>{summary}</p>
              <Button value="Bet Here" />
          </div>
    </div>
  )
}

// props validation should be propTypes
Pick.propTypes = {
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default Pick
