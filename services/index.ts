import axios from 'axios';

const url = "http://localhost:7020"

const services = {
    getBusiness: async () => {
        let params = new URLSearchParams(document.location.search.substring(1));
        let businessId = params.get("businessId");

        return axios.get(`${url}/business/${businessId}`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    // log.error(err)
                    console.log(err)
                })
    }
}

export default services;