  import { globalCss } from '@stitches/react'

  export const globalStyles = globalCss({
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      outline: 'none',
    },
    'body': {
      backgroundColor: '#F0F0F0',
      fontFamily: 'Roboto, arial, sans-serif',
    },
    'button': {
      cursor: 'pointer'
    },
    '::-webkit-scrollbar': {
      width: '5px'
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: '#FFF'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#3338',
      borderRadius: '5px',
    },
  })