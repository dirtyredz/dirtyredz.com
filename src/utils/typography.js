import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '25px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Tall & Lean', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['FuturaPT-Light', 'Georgia', 'serif'],
  scaleRatio: 3.3,
  bodyGray: 10,
  letterSpacing: 3,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

// Output CSS as string.
// typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()
