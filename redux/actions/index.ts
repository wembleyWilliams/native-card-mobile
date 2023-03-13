import {BusinessData, UserData} from "../../common/types";

export const setBusinessDetails = (businessDetails: BusinessData) => ({
    type: 'SET_BUSINESS_DETAILS',
    payload: {BusinessData: businessDetails}
})

export const setUserDetails = (userDetails: UserData) => ({
    type: 'SET_USER_DETAILS',
    payload: {UserData: userDetails}
})


