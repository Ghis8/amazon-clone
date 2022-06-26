import axios from 'axios'

const instance =axios.create({
	baseUrl:'...' //API (cloud function) URL 
})
export default instance;