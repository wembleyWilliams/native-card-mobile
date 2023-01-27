import {ApplicationState} from "../../common/types";

export const setCardDetails = (cardDetails: ApplicationState) => ({
    type: 'SET_CARD_DETAILS',
    payload: cardDetails
})

