import { Mail, Notifications, Pets } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))
const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))
export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{display:{xs: "none", sm:"block"}}}>LAMA DEV</Typography>
        <Pets sx={{display:{xs: "block", sm:"none"}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={10} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width:30, height: 30}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jeeiZFn4sJVpD_ihjgxJtwHaEK%26pid%3DApi&f=1"/>
        </Icons>
        <UserBox>
          <Avatar sx={{width:30, height: 30}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jeeiZFn4sJVpD_ihjgxJtwHaEK%26pid%3DApi&f=1"/>
          <Typography variant='span' >John Doe</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  )
}
