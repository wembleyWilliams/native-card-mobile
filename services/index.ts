import axios from 'axios';
// @ts-ignore
import {REACT_APP_API} from '@env';

const services = {
    generateVCard: async (cardId: string) =>{

        // const vCard: VCardData = {
        //     uid: data.uid,
        //     birthday: data.birthday,
        //     cellPhone: data.cellPhone,
        //     pagerPhone: data.pagerPhone,
        //     email: data.email,
        //     workEmail: data.workEmail,
        //     firstName: data.firstName,
        //     formattedName: data.formattedName,
        //     gender: data.gender,
        //     homeAddress: {
        //         label: data.homeAddress.label,
        //         street: data.homeAddress.street,
        //         city: data.homeAddress.city,
        //         stateProvince: data.homeAddress.stateProvince,
        //         postalCode: data.homeAddress.postalCode,
        //         countryRegion: data.homeAddress.countryRegion,
        //     },
        //     homePhone: data.homePhone,
        //     homeFax: data.homeFax,
        //     lastName: data.lastName,
        //     logo: {
        //         url: data.logo?.url,
        //         mediaType: data.logo?.mediaType,
        //         base64: data.logo.base64,
        //     },
        //     middleName: data.middleName,
        //     namePrefix: data.namePrefix,
        //     nameSuffix: data.nameSuffix,
        //     nickname: data.nickname,
        //     note: data.note,
        //     organization: data.organization,
        //     photo: {
        //         url: data.photo?.url,
        //         mediaType: data.photo?.mediaType,
        //         base64: data.photo.base64,
        //     },
        //     role: data.role,
        //     socialUrls: {
        //         facebook: data.socialUrls?.facebook,
        //         linkedIn: data.socialUrls?.linkedIn,
        //         twitter: data.socialUrls?.twitter,
        //         flickr: data.socialUrls?.flickr,
        //     },
        //     source: data.source,
        //     title: data.title,
        //     url: data.url,
        //     workUrl: data.workUrl,
        //     workAddress: {
        //         label: data.workAddress.label,
        //         street: data.workAddress.street,
        //         city: data.workAddress.city,
        //         stateProvince: data.workAddress.stateProvince,
        //         postalCode: data.workAddress.postalCode,
        //         countryRegion: data.workAddress.countryRegion,
        //     },
        //     workPhone: data.workPhone,
        //     workFax: data.workFax,
        //     version: data.version,
        // };

        services.getContactCard(cardId)
            .then((res) => {
                // Create a Blob object for the vCard data
                const blob = new Blob([res], { type: 'text/vcard' });
                const url = URL.createObjectURL(blob);

                // Trigger the download in a mobile-friendly way
                const a = document.createElement('a');
                a.href = url;
                a.download = 'contact.vcf';
                a.style.display = 'none'; // Hide the anchor element
                document.body.appendChild(a);
                a.click(); // Trigger the download
                document.body.removeChild(a);

                URL.revokeObjectURL(url); // Clean up

                console.log('VCF file downloaded');
            })
            .catch((err) => {
                console.log('Error downloading VCF file:', err);
            });
    },
    getContactCard: async (cardId: any) => {
      return axios.get(`${ REACT_APP_API }/business/contact-card/${cardId}`)
          .then((res)=>{
              return res.data
          })
          .catch((err) => {
              console.log(err)
              return null
          })
    },
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