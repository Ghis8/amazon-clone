import axios from 'axios'

const instance =axios.create({
	baseUrl:'http://localhost:5001/clone-1678e/us-central1/api' //API (cloud function) URL 
})
export default instance;