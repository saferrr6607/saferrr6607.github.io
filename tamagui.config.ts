import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createFont, createTamagui, createTheme, createTokens } from 'tamagui'

// if using only @tamagui/core with `react-native` components
// if using `tamagui` this isn't necessary as it does this setup for you (for most components)

const myTokens = createTokens({
    ...tokens,
    color: {
        ...tokens.color,
        text: "#463D3C",
        textSecondary: "#526F73",
        primary: "#DB8780",
        primaryDark: "#d06158",
        primaryLight: "#e6ada8",
        primaryLighter: "#ecbfbc",
        secondary: "#FFF7F6",
        secondaryDark: "#ffcac3",
        secondaryLight: "#ffffff",
        error: "#DD636E",

        emergency: "#D35D52",
        file: "#526F73",
        loc: "#DBA98A",
    },
});

const myThemes = {
    ...themes,
    light: {
        color: 'red'
    }
};

const myShorthands = {
    ...shorthands,
} as const;

const fonts = {
    body: createFont({
        // family: 'Roboto,Inter, Helvetica, Arial, sans-serif',
        family: 'Roboto',
        size: {
            // You'll want to fill these values in so you can use them
            // for now, fontSize="$4" will be 14px.
            // You can define different keys, but `tamagui`
            // standardizes on 1-15.
            4: 14,
        },
        lineHeight: {
            4: 16,
        },

    }),
};

export default createTamagui({
    themes,
    tokens: myTokens,
    shorthands: myShorthands,
    fonts,
    defaultProps: {
        Text: {
            color: "$text",
        }
    }
})

export { myTokens as tokens };