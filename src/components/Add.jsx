
import { Modal, Tooltip, styled, Typography, Avatar } from '@mui/material'
import Fab from '@mui/material/Fab';
import {Add as AddIcon} from '@mui/icons-material'
import React from 'react'
import { Box } from '@mui/system';
import { useState } from 'react';


const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(45%)" , md: 30},}} onClick={e=>setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={250} bgcolor={"white"} p={3} borderRadius={4}>
                <Typography variant='h6' color={"gray"} textAlign="center">
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK%26pid%3DApi&f=1' sx={{width: 30, height: 30}}/>
                    <Typography variant='span' fontWeight={500}>John Doe</Typography>
                </UserBox>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add;