export const COLORS = {
    // primary: "#D14545",
    background: "#FFF",
    primary: "#F0EAD6",
    secondary: "#4D626C",

    white: "#FFF",
    gray: "#74858C",
};

export const CARD_HEIGHT = 200

export const CARD_MIN_WIDTH = 312

export const CARD_MAX_WIDTH = 400

export const MARGINS = {
    text: 25,
}

export const SIZES = {
    base: 8,
    small: 12,
    font: 14,
    medium: 24,
    large: 48,
    extraLarge: 32,
};

export const PADDING = {
    button: 20
}

export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
};

export const SHADOWS = {
    light: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    medium: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    dark: {
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
};
