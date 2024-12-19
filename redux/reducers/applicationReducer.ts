import {ApplicationState} from "../../common/types";

const initialState: ApplicationState = {
    application: {
        cardData: {
            _id: "",
            userId: "",
            businessId: "",
            tapCount: 0,
            lastTap: "",
            taps: [
                {
                    timestamp: "",
                    location: "",
                    deviceInfo: ""
                }
            ],
            createdAt: "",
            deactivatedAt: "",
            status: false,
            socialsData: [
                {
                    userId:"",
                    businessId:"",
                    platform: "",
                    profileName: "",
                    profileUrl: "",
                    created_at: "",
                    updated_at:""
                }
            ],
            roleData: {
                _id: "",
                userId: "",
                businessId: "",
                role: ""
            },
            vcardData: {
                _id: "",
                birthday: "",
                cellPhone: "",
                pagerPhone: "",
                email: "",
                workEmail: "",
                firstName: "",
                formattedName: "",
                gender: "",
                homeAddress: {
                    label: "",
                    street: "",
                    city: "",
                    stateProvince: "",
                    postalCode: "",
                    countryRegion: ""
                },
                homePhone: "",
                homeFax: "",
                lastName: "",
                logo: {
                    url: "",
                    mediaType: "",
                    base64: false
                },
                middleName: "",
                namePrefix: "",
                nameSuffix: "",
                nickname: "",
                note: "",
                organization: "",
                photo: {
                    url: "",
                    mediaType: "",
                    base64: false
                },
                role: "",
                socialUrls: {
                    instagram: ""
                },
                source: "",
                title: "",
                url: "",
                workUrl: "",
                workAddress: {
                    label: "",
                    street: "",
                    city: "",
                    stateProvince: "",
                    postalCode: "",
                    countryRegion: ""
                },
                workPhone: "",
                workFax: "",
                version: "",
                ownerId: ""
            },
            userData: {
                _id: "",
                firstName: "",
                lastName: "",
                age: 0,
                email: "",
                address: {
                    street: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    country: ""
                },
                phone: ""
            },
            businessData: {
                _id: "",
                name: "",
                industry: "",
                address: {
                    street: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    country: ""
                },
                website: "",
                contactEmail: "",
                phone: "",
                socials: [
                    {
                        platform: "",
                        profileName: "",
                        profileUrl: ""
                    }
                ],
                services: [],
                description: "",
                logo: {
                    mime: "",
                    data: ""
                }
            }
        }
    }
}


    export const applicationReducer = (state = initialState, action: any) => {
        switch (action.type) {
            case "SET_CARD_DETAILS":
                const card = action.payload
                return {
                    ...state,
                    application: card
                }

            default:
                return state;
        }
    }

    export default applicationReducer;