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
    color: '#FFF'
  },

  'select': {
    padding: '5px 15px',
    border: 0,
    borderRadius: '5px',
    minWidth: '250px',
    maxWidth: '250px',
    fontSize: '15px'
  },

  'button': {
    padding: '5px 15px',
    border: 0,
    borderRadius: '5px',
    boxShadow: '1px 1px 4px #DDD7',
    transition: 'filter 0.1s linear',

    '&:hover': {
      filter: 'brightness(95%)'
    },
    '&:active': {
      filter: 'brightness(80%)'
    }
  }
})