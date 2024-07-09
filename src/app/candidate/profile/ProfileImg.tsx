import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import styled from 'styled-components'

export const DialogStyle = styled('div')`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #fff;`


const ProfileImg= ({ imageSrc }) => {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div onClick={handleClickOpen}>
        <img src={imageSrc} alt="Profile" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
        <DialogStyle>
          <img src={imageSrc} alt="Profile" />
          </DialogStyle>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ProfileImg
