import { Switch } from "@mui/material"
import IconSwitch from "../../components/iconSwitch"
import PetsIcon from '@mui/icons-material/Pets';
export const Home = () => {  
  return(<div>
    <IconSwitch Icon={<PetsIcon/>} outlined={true}/>
  </div>)

}
