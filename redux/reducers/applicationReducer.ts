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
            profilePicture: { data: '', mime: '' }
        },
        BusinessData: {
            _id: '',
            name: '',
            description: '',
            contact: '',
            address: '',
            pointOfContact: '',
            email: '',
            socialMedia: [{
                profileName: '',
                profileURL: '',
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