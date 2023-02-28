import axios from 'axios';

const Post = (url, data) => {
    axios.post(url, data , {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
  });
}

export default Post;