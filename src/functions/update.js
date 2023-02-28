import axios from "axios";

const Update = (URL, id, value) => {
    axios.patch(`${URL}/${id}`, {
        'key': value
    })
    .then(response => {
    console.log('Response:', response.data);
    })
    .catch(error => {
    console.error('Error:', error);
    });
}

export default Update;