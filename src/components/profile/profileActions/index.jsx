import React from 'react'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'
import { OuterActions } from './index.styles'
const ProfileActions = () => {
    const navigate = useNavigate()
  return (
    <OuterActions>
            <Button variant="contained"  color="secondary" text="Admin Panel" event={()=>{navigate("/admin")}}/>
           <Button variant="contained"  color="secondary" text="Add Venue" event={()=>{navigate("/venue/add")}}/>
           
    </OuterActions>
  )
}

export default ProfileActions