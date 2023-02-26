import axios from 'axios'

const Fetch = async(url) => {
    await axios.get(url)
        .then((response) => {
            return response
        })
}


export default Fetch;