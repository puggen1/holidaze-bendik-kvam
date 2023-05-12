import { Link } from 'react-router-dom'
import Avatar from '../../avatar'
import {OuterProfileHeader} from './index.styled'
import Login from '../../modal/login';
import useModalToggler from '../../../hooks/useModalToggler';
import useSetModalContent from '../../../hooks/useSetModalContent';
const ProfileHeader = ({name, avatar}) => {
  //hooks
  const {modalOn} = useModalToggler()
  const {setModal} = useSetModalContent()
  
    //profile / use context
  return (
    <OuterProfileHeader>
        {name ?  <Link to="/profile" style={{textDecoration:"none"}}><Avatar type='small' username={name} src={avatar} /></Link> : <div style={{height:"50px", margin:"auto 0"}} onClick={()=>{ setModal(<Login/>); modalOn() }}><Avatar type='small' username={name} src={avatar} /></div>}
    </OuterProfileHeader>
  )
}

export default ProfileHeader