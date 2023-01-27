import axios from 'axios';

const url = "http://localhost:7020"

const services = {
    getBusiness: async () => {

        //Local - For Testing only
        return axios.get(`${url}/business/63d1f602022d42b7cc4aa558`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.log(err)
            })

        //Hosted
        // let params = new URLSearchParams(document.location.search.substring(1));
        // let businessId = params.get("businessId");

        // return axios.get(`${url}/business/${businessId}`)
        //         .then((res) => {
        //             return res.data;
        //         })
        //         .catch((err) => {
        //             // log.error(err)
        //             console.log(err)
        //         })
    }
}

export default services;