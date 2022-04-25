import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginContainer = styled('form', {
  width: '500px',
  height: '600px',
  boxShadow: '2px 2px 10px #3335',
  backgroundColor: '#FFFFFF',
  borderRadius: '5px',
  padding: '30px 0',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',

  'p': {
    fontfamily: 'Arial',
    textAlign: 'center',
    marginTop: '30px',
    fontWeight: '500',
    fontSize: '17px'
  },
  
  'button': {
    width: '200px',
    height: '40px',
    marginTop: '20px',
    border: 0,
    backgroundColor: '#FF000C',
    borderRadius: '5px',
    transition: 'filter 1s ease',
    'span': {
      color: '#FFFFFF',
      fontSize: '16px',
    },
    '&:hover': {
      filter: 'brightness(80%)'
    },
    '&:focus': {
      border: '1px solid #333'
    }
  }
})

export const ContainerLogin = styled('div', {
  'a': {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    fontSize: '15px',
    color: '#333',
    transition: 'color .1s linear',

    '&:hover': {
      color: '#D22',
    },
    '&:focus': {
      color: '#D22',
      textDecoration: 'underline'
    }
  },
})

export const ContainerInput = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',

  'p': {
    fontWeight: '300'
  },
  'input, select': {
    width: '250px',
    margin: '5px 0',
    borderRadius: '5px',
    border: '1px solid #DDD',
    padding: '12px',
    fontSize: '14px',
    fontWeight: '400',

    '&::placeholder': {
      fontSize: '14px',
    },
    '&:focus': {
      border: '1px solid #333'
    }
  }
})