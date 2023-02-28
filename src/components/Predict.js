import { useEffect, useState } from 'react';
import { DateTime } from "luxon";
import axios from 'axios';
import Random from './Random'; 

const API = "http://127.0.0.1:3000/api/v1/predictions";

const getAPI = async() => {
  return await axios.get(API)
  .then((response) => response.data)
}

const Predict = () => {
    const [value, setValue] = useState([])

    useEffect(() => {
        let mounted = true;
        getAPI().then((item) => {
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

    const item = selected?.predict.split(',')

    return (
        <div>
            <div className="my-3 bg-white shadow space-y-4 py-4 border rounded-lg h-50 max-w-1 mx-5 md:mx-10
            justify-center text-center flex flex-col items-center">
            <h1 className="font-bold text-xl">Lunchtime Prediction</h1>
            <date className="font-bold">Jan 05, 2023</date>
            <div className="space-y-2">
                <p>Prediction 1</p>
                { item && 
                    <ul className="flex space-x-3 md:space-x-1 lg:space-x-5">
                    <li className="circle draw green shadow">{item[0]}</li>
                    <li className="circle draw purple shadow">{item[1]}</li>
                    <li className="circle draw Blue shadow">{item[2]}</li>
                    <li className="circle draw yellow shadow">{item[3]}</li>
                    <li className="circle draw deepRed shadow">{item[4]}</li> 
                    </ul>
                }    
            </div>
            <div>
                <p>Prediction 2</p>
                {item &&
                <ul className="flex space-x-3 md:space-x-1 lg:space-x-5 my-3">
                <li className="draw circle Blue shadow">{item[5]}</li> 
                <li className="draw circle yellow shadow">{item[6]}</li>
                <li className="draw circle deepRed shadow">{item[7]}</li>
                <li className="draw circle purple shadow">{item[8]}</li>
                <li className="draw circle green shadow">{item[9]}</li>
            </ul> 
            } 
            </div>
            </div>
            <Random array={item && item } />
        </div>
    )
}

export default Predict;