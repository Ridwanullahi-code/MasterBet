import axios from 'axios';

const Delete = (URL, id) => {
    axios.delete(`${URL}/${id}`)
  .then(response => {
    console.log('Response:', 'Successful deleted data');
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

export default Delete;