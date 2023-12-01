const typographyVariant = {
    h1: {
        fontStyle: 'normal',
        lineHeight: '110%',
        fontSize: '26px',
        fontWeight: 700,
        letterSpacing: '0.039px',
    },
    h2: {
        fontStyle: 'normal',
        lineHeight: '110%',
        fontSize: '24px',
        fontWeight: 700,
        letterSpacing: '0.036px',
    },
    h3: {
        fontStyle: 'normal',
        lineHeight: '110%',
        fontSize: '18px',
        fontWeight: 400,
        letterSpacing: '-0.09px',
    },
    subtitle: {
        fontStyle: 'normal',
        lineHeight: '110%',
        fontSize: '16px',
        fontWeight: 500,
        letterSpacing: '0.016px',
    },
    body1: {
        fontStyle: 'normal',
        lineHeight: '110%',
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '0.08px',
        textTransform: 'capitalize',
    },
    body1Bold: {
        fontStyle: 'normal',
        lineHeight: '110%',
        fontSize: '16px',
        fontWeight: 700,
        letterSpacing: '0.08px',
        textTransform: 'capitalize',
    },
};

const spacing = {
    xxSmall: 4,
    xSmall: 8,
    small: 12,
    medium: 16
}

const radius = {
    small: 6,
    medium: 12,
    large: 40
}

export const theme = {
    white: "#FEFEFE",
    black: '#151515',

    grey100: "#DEDEDE",
    grey300: "#C1C1C1",
    grey500: "#585858",
    grey700: "#2A2A2A",
    lightblue100: "#B4FFF1",
    lightblue300: "#8EFFEB",
    lightblue500: "#43FFDD",
    lightblue700: "#2AE5C4",

    statusTodo: "#FEFEFE",
    statusInProgress: "#FFA451",
    statusReview: "#D795FF",
    statusCompleted: "#43FFDD",

    success: "#A4F572",
    warning: "#FCEA49",
    error: "#FF5146",

    gradient: 'linear-gradient(130deg, #D795FF 0%, #43FFDD 92.42%)',
    typographyVariant,
    spacing,
    radius
};

export type Theme = typeof theme;
