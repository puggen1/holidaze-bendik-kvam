import { Link } from 'react-router-dom'
import Avatar from '../../avatar'
import {OuterProfileHeader} from './index.styled'
const ProfileHeader = ({name, avatar}) => {
    //profile / use context
    
  return (
    <OuterProfileHeader>
        {name ?  <Link to="/profile"><Avatar type='small' username={name} src={avatar} /></Link> : <div style={{height:"50px", margin:"auto 0"}} onClick={()=>{console.log("login modal now")}}><Avatar type='small' username={name} src={avatar} /></div>}
    </OuterProfileHeader>
  )
}

export default ProfileHeader