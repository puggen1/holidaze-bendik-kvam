import React from 'react'
import { pink } from '@mui/material/colors'
import { Avatar as MuiAvatar, Typography } from '@mui/material'
const Avatar = ({type="small", username = "?", src}) => {
    let size = type === "small" ? 50 : 250
    let textSize = type === "small" ? "h5" : "h2"
        return (
            <MuiAvatar sx={{height:size, width:size, bgcolor:pink[200]}} alt={username + "'s profile picture"} src={src}><Typography variant={textSize} component="p">{username.slice(0,2).toUpperCase()}</Typography></MuiAvatar>
        )
}

export default Avatar