import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '400px',
  height: '100vh',
  boxShadow: '1px 0px 5px #3335',
  fontFamily: 'Roboto, Arial, sans-serif',  
  backgroundColor: '#F8F8F8',
  color: '#333',

  '.side-navigation-panel': {
    marginTop: '50px',

  }, 
  '.side-navigation-panel-select': {
    border: '1px solid #DDD8',
    margin: '5px 0',  
  },
  '.side-navigation-panel-select-inner': {
  }
})

export const ImageContainer = styled('div', {
  display: 'flex',
  justiftContent: 'center',
  alignitems: 'center',
  padding: '25px 0',
  margin: '0 auto'
})