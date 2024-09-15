import {ApplicationState} from "../../common/types";

const initialState: ApplicationState = {
    application: {
        UserData: {
            _id: '',
            firstname: '',
            lastname: '',
            email: '',
            businessId: [''],
            password: '',
            profilePicture: {data: '', mime: ''}
        },
        BusinessData: {
            industry: '',
            phone: '',
            _id: '',
            logo: {
                data: '',
                mime: '',
            },
            name: '',
            description: '',
            contact: {
                firstname: '',
                lastname: '',
                company: '',
                phoneNumbers: [{
                    countryCode: '',
                    digits: '',
                    label: '',
                    number: ''
                }],
                emails: [{
                    email: '',
                    label: ''
                }],
                addresses: [{
                    city: '',
                    country: '',
                    isoCountryCode: '',
                    label: '',
                    postalCode: '',
                    region: '',
                    street: ''
                }],
                contactType: ''
            },
            address: {
                street: '',
                city: '',
                state: '',
                postalCode: '',
                country: ''
            },
            pointOfContact: '',
            contactEmail: '',
            businessHandles: [{
                socialMedia: '',
                profileName: '',
                profileUrL: ''
            }]
        }
    }
}


export const applicationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_BUSINESS_DETAILS":
            const business = action.payload
            return {
                ...state,
                application: business
            };
        case "SET_USER_DETAILS":
            const user = action.payload
            return {
                ...state,
                application: user
            };

        default:
            return state;
    }
}

export default applicationReducer;