import {CardData} from "../../common/types";

export const setCardDetails = (cardDetails: any) => ({
    type: 'SET_CARD_DETAILS',
    payload: {cardData: cardDetails}
})


