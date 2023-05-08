import { Link } from 'react-router-dom'
import Avatar from '../../avatar'
import {OuterProfileHeader} from './index.styled'
import { useContext } from 'react'
import {ModalContext} from '../../../context/modalContext';
const ProfileHeader = ({name, avatar}) => {
  const {setModalStatus, setInnerContent} = useContext(ModalContext)
    //profile / use context
  return (
    <OuterProfileHeader>
        {name ?  <Link to="/profile" style={{textDecoration:"none"}}><Avatar type='small' username={name} src={avatar} /></Link> : <div style={{height:"50px", margin:"auto 0"}} onClick={()=>{ setInnerContent("login"); setModalStatus(true) }}><Avatar type='small' username={name} src={avatar} /></div>}
    </OuterProfileHeader>
  )
}

export default ProfileHeader