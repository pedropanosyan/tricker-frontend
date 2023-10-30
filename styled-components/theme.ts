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
    black: '#111',
    blackSecondary: '#1A1A1A',
    blackTertiary: '#1F1F1F',
    gray: '#DEDEDE',
    textGray: '#9D9D9D',
    lightgray: '#BEBEBE',
    lightergray: '#D9D9D9',
    backgroundGray: "#FFFFFF21",
    white: '#fff',
    violet: '#A12BFF',
    lightViolet: '#D795FF',
    lightBlue: '#43FFDD',
    orange: '#FFA451',
    spacing,
    radius
};

export type Theme = typeof theme;
