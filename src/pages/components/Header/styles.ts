import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '100%',
  height: '50px',
  backgroundColor: 'rgb(220, 21, 21, 1)',
  padding: '20px',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',  
  fontFamily: 'Roboto, Arial, sans-serif',
  boxShadow: '0px 2px 5px #3335',

  'p': {
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',

    'svg': {
      marginRight: '5px',
    }
  },

  'select': {
    padding: '5px 15px',
    border: 0,
    borderRadius: '5px',
    minWidth: '300px',
    maxWidth: '250px',
    fontSize: '15px'
  },

  'button': {
    padding: '8px 20px',
    border: 0,
    fontSize: '15px',
    borderRadius: '5px',
    boxShadow: '1px 1px 4px #DDD7',
    transition: 'filter 0.1s linear',

    '&:hover': {
      filter: 'brightness(90%)'
    },
    '&:active': {
      filter: 'brightness(80%)'
    }
  }
})