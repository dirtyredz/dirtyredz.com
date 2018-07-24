import Typography from 'typography'

const typography = new Typography({ 
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  headerFontFamily: ['Tall & Lean','Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['FuturaPT-Light','Georgia', 'serif'],
  scaleRatio: 3.3,
  bodyGray: 10,
  letterSpacing: 3
}); 

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
