import axios from 'axios';


/**
 * Cette classe gère les connections à l'API et la configuration de axios
 */
export class HttpService {


    async setupConfig() {
        this.backendURL = "http://localhost:8081/api/v1"
        axios.defaults.baseURL = this.backendURL
        return this.backendURL
    }


    get(url) {
        return this.setupConfig().then(() => {
            return axios.get(url)
        })
    }
    post(url, data) {
        return this.setupConfig().then(() => {
            return axios.post(url, data)
        })
    }

    put(url, data) {
        return this.setupConfig().then(() => {
            return axios.put(url, data)
        })
    }

}