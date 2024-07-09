// import { styled } from '@material-ui/core'
import { CardContent, Typography, Card, CardHeader, styled } from '@mui/material'
import { memo } from 'react'
// import { MuiCardStyle } from './style/MuiCardStyle'
// import styled from 'styled-components'

interface props {
    title: string
    data: any
    rightText?: any
    whiteHeader?: string
  }
  
  interface MuiCardStyleProps {
    whitehead: string
  }

const MuiCardStyle = styled(Card)<MuiCardStyleProps>((whitehead )  => ({
  margin: '10px 0',
  boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.1)',
  overflow: 'inherit',
  '& .MuiCardHeader-root': {
    textAlign: 'center',
    position: 'relative',
    backgroundColor: whitehead ? 'var(--bgwhite)' : 'var(--bluecolor)',
    //background: 'var(--bluecolor)',
    color: whitehead ? 'var(--textblue)' : 'var(--textwhite)',
    borderBottom: '1px solid rgba(32, 39, 140, 0.125)',
    paddingTop: '13px',
    paddingBottom: '13px',
    marginBottom: 0,
    '& span': {
      textTransform: 'capitalize',
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
}))

const MuiCard = memo(({ title, data, rightText, whiteHeader }: props) => {
  return (
    <MuiCardStyle whitehead={''} >
      {title && (
        <CardHeader
          color="primary"
          title={title}
          sx={{
            textAlign: 'left!important',
          }}
          action={rightText}
        />
      )}
      <CardContent>{data}</CardContent>
    </MuiCardStyle>
  )
})

export default MuiCard
