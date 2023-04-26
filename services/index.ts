import axios from 'axios';
const url = "https://ebusinesscardservices.com"
const services = {
    // getUser: async () => {
    //   //local
    //   return axios.get(`${url}/user/63d1f602022d42b7cc4aa558`)
    //       .then((res)=>{
    //           return res.data
    //       })
    //       .catch((err) => {
    //           console.log(err)
    //           return null
    //       })
    // },
    getBusiness: async () => {

        // let params = new URLSearchParams(document.location.search.substring(1));
        // let businessId = params.get("businessId");

        // if (!businessId) {
            //Local - For Testing only
            return axios.get(`${url}/business/63d1f602022d42b7cc4aa558`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    console.log(err)
                    return null
                })
        // } else {
        //     //Hosted
        //     return axios.get(`${url}/business/${businessId}`)
        //         .then((res) => {
        //             return res.data;
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //             return null
        //         })
        // }
    }
}

export default services;