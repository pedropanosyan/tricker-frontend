

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
    grey100: "#DEDEDE",
    grey300: "#C1C1C1",
    grey500: "#585858",
    grey700: "#2B2B2B",
    black: '#111',

    typeImprovement: '#43FFDD',
    typeBug: '#45BCFF',
    typeFeature: '#FF6161',

    priorityNo: "#B9B9B9",
    priorityLow: "#FFDC61",
    priorityMedium: "#FFA451",
    priorityHigh: "#FF6161",
    priorityUrgent: "#CB3434",

    statusTodo: "#FEFEFE",
    statusInProgress: "#FFA451",
    statusReview: "#D795FF",
    statusCompleted: "#43FFDD",

    gradient: 'linear-gradient(130deg, #D795FF 0%, #43FFDD 92.42%)',

    spacing,
    radius
};

export type Theme = typeof theme;
