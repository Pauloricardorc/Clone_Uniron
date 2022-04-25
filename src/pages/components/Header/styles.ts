import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: 'auto',
  marginTop: '20px',
  height: '250px',
  fontFamily: 'Roboto, Arial, sans-serif',  
  color: '#333',
})

export const FitContainer = styled('div', {
  padding: '10px 15px',
  backgroundColor: '#FFF',
  borderTopLeftRadius: '1px',
  borderTopRightRadius: '1px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between', 
  marginTop: '-4px',

  'p': {
    fontWeight: '400'
  },

  'select': {
    border: 0,
    padding: '5px 20px',
    borderRadius: '5px',
  },

  'button': { 
    padding: '5px 25px',
    border: 0,
    backgroundColor: '#D02',
    boxShadow: '1px 1px 2px #D01',
    color: '#F0F0F0',
    borderRadius: '3px',
    transition: 'filter .1s linear',

    '&:hover': {
      filter: 'brightness(95%)',
      boxShadow: '1px 1px 2px #0008',
    },
    '&:active': {
      filter: 'brightness(90%)'
    }
  }
})