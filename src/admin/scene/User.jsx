import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Delete from '../../functions/delete';

const URL = 'http://localhost:3000/api/v1/users';

const getAPI = async() => {
  return await axios.get(URL)
  .then((response) => response.data)
}

const User = () => {
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
  
  const handleDelete = (event) => {
    Delete(URL, event.target.id);
  }
  
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-center" style={{backgroundColor:'#17181a'}}>
                    <th
                      className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                    >
                      ID
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                    >
                      Phone Number
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                    >
                      Edit
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {value && value.map((item, index) => (
                    <tr key={item.id}>
                    <td
                      className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium"
                    >
                      {item.id}
                    </td>
                    <td
                      className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium"
                    >
                      {item.email}
                    </td>
                    <td
                      className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium"
                    >
                        <button
                        id={item.id}
                        style={{border:'1px solid #030385', backgroundColor: '#030385', 'color':'white'}}
                        type='button'
                        className="border-primary text-primary hover:bg-primary inline-block rounded-lg border py-2 px-6 hover:text-white"
                      >
                        Edit
                      </button>
                    </td>
                    <td
                      className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium"
                    >
                        <button
                        onClick={handleDelete}
                        id={item.id} 
                        style={{border:'1px solid #b32d19', backgroundColor: '#b32d19', 'color':'white'}}
                        className="text-primary hover:bg-primary inline-block rounded-lg border py-2 px-6 hover:text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default User
