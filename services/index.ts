import axios from 'axios';
const url = "https://www.agoodbusinesscard.icu/api"
// const url = "http://localhost:7020"
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
    getBusiness: async (cardId?: string) => {

        if (!cardId) {
            //Local - For Testing only
            return axios.get(`${url}/business/6691e4a5acd809745e822caa`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    console.log(err)
                    return null
                })
        } else {
            // Hosted
            return axios.get(`${url}/business/${cardId}`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    console.log(err)
                    return null
                })
        }
    }
}

export default services;