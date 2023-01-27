import {ApplicationState} from "../../common/types";

export interface State {
    application: ApplicationState
}

const initialState: ApplicationState = {
    user: {
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        businessId: [''],
        password: '',
        profilePicture: { data: '', mime: '' }

    },
    business: {
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

export const applicationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SET_CARD_DETAILS":
            const payloadCardDetails = action.payload
            return {
                ...state,
                cardDetails: payloadCardDetails
            };
        default:
            return state;
    }
}

export default applicationReducer;