import { styled } from '@stitches/react'

export const Container = styled('div', {
  maxWidth: '100%',
  overflow: 'auto',
  margin: '0 auto',
  padding: '5rem',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
})

export const Card = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
  width: '220px',
  height: '200px',
  backgroundColor: '#FFF',
  boxShadow: '4px 4px 2px #2221',
  cursor: 'pointer',
  borderRadius: '3px',
  padding: '5px',
  margin: '10px 20px',
  transition: 'boxShadow .3s ease',

  'img': {
    width: '100px',
    height: '100px',
  },

  'p': {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e229',
    marginTop: '30px'
  },

  '&:hover': {
    backgroundColor: '#FFF9',
    boxShadow: 'inset 4px 4px 2px #2221'
  }
})