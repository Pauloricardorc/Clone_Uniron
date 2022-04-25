import { styled } from '@stitches/react'

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  outline: 'none',
  background: 'linear-gradient(0deg, rgba(9,9,121,0) 74%, rgba(255,255,255,1) 74%, rgba(255,46,46,0.989233193277311) 50%);',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const Content = styled('div', {
  width: '825px',
  height: '100vh',
  backgroundColor: '#FFF',
  display: 'flex',
})