export const theme = {
  colors: {
    primary: '#FCC33A',
    secondary: '#78A9FF',
    secondaryDark: '#285AB3',
    text: '#28282C',
    textInverse: '#F0F0F0',
    background: '',
    backgroundDark: ''
  },
  fontSizes: {
    // rem
    sm: 0.8,
    md: 1,
    lg: 1.6,
    xl: 2.2
  },
  textVariants: {
    h1: {
      fontSize: 'xl',
      lineHeight: 1.4
    },
    h2: {
      fontSize: 'lg',
      lineHeight: 1.2
    },
    h3: {
      fontSize: 'lg',
      lineHeight: 1.2
    },
    h4: {
      fontSize: 'lg',
      lineHeight: 1.2
    },
    h5: {
      fontSize: 'lg',
      lineHeight: 1.2
    },
    h6: {
      fontSize: 'lg',
      lineHeight: 1.2
    },
    p: {
      fontSize: 'md',
      lineHeight: 1
    },
    span: {
      fontSize: 'inherit',
      lineHeight: 'inherit'
    }
  },
  radii: [4, 8, 12]
} as const

export type AppTheme = typeof theme

export type ThemeColor = keyof AppTheme['colors']

export type FontSize = keyof AppTheme['fontSizes']

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
