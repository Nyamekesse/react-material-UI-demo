import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box flex={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position={"fixed"} width={"350px"} >
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Online Friends</Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IzZAmxQuQtZNAofFk_05wAHaE8%26pid%3DApi&f=1" />
          <Avatar alt="Travis Howard" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.LDBc16zRb5HSr-ay0DtZnwHaEK%26pid%3DApi&f=1" />
          <Avatar alt="Cindy Baker" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cOIhmdMaEVjEuKe33B9n9wHaF7%26pid%3DApi&f=1" />
          <Avatar alt="Agnes Walker" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JZUQU7JPuu6n24Zi2gX_1AHaE8%26pid%3DApi&f=1" />
          <Avatar alt="Trevor Henderson" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QPvemSNVKPHR0f8lA6lYnwHaLG%26pid%3DApi&f=1" />
          <Avatar alt="Trevor Henderson" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QPvemSNVKPHR0f8lA6lYnwHaLG%26pid%3DApi&f=1" />
          <Avatar alt="Trevor Henderson" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QPvemSNVKPHR0f8lA6lYnwHaLG%26pid%3DApi&f=1" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.PJuUPl07XEye9CwCSR1o0wHaEK%26pid%3DApi&f=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.3cYL3j-e07RzfKotK_N0QAHaEK%26pid%3DApi&f=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZmR9c4tJ-4ERclMj-Ni3VQHaEg%26pid%3DApi&f=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.e7DA6Wu6Ozp-L9XBVSB7SQHaE8%26pid%3DApi&f=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6%26pid%3DApi&f=1" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK%26pid%3DApi&f=1" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default RightBar