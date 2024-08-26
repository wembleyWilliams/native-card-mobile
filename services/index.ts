import axios from 'axios';
import { REACT_APP_API } from '@env';

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
            return axios.get(`${REACT_APP_API}/business/6691e4a5acd809745e822caa`)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    console.log(err)
                    return null
                })
        } else {
            // Hosted
            return axios.get(`${REACT_APP_API}/business/${cardId}`)
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