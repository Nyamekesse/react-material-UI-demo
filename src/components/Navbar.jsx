import StarIcon from '@mui/icons-material/Star';
import { AppBar, Toolbar, styled, Typography } from '@mui/material'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white"
}))
export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{display:{xs: "none", sm:"block"}}}>LAMA DEV</Typography>
        <StarIcon sx={{display:{xs: "block", sm:"none"}}}/>
        <Search>search</Search>
      </StyledToolBar>
    </AppBar>
  )
}
