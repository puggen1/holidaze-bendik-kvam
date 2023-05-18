import {useState, useContext} from 'react'
import DefaultInput from '../input/defaultInput'
import { ImageList, ImageListItem } from '@mui/material'
import Button from '../Button'
import AddEditContext from '../../context/addEditContext'
const AddPictures = () => {
  const {media, setMedia} = useContext(AddEditContext)
  const [currentUrl, setCurrentUrl] = useState("")
  const manager = {
    value : currentUrl,
    onChange : (e) => {setCurrentUrl(e.target.value)}
  }
  //to remove the wanted picture from the state
 const removePicture = (e) => {
    setMedia(media.filter((item, index) =>{
      return index !== parseInt(e.target.id)}))
 }
 //to add the picture to the state
 onsubmit = (e) => {
    e.preventDefault()
    if(currentUrl === "") return
    setMedia([...media, currentUrl ]);
    setCurrentUrl("");
 }
  return (
    <div>
      <ImageList  variant='masonry' rowHeight={150} cols={4} sx={{minHeight:"300px"}}>
        {media.map((item, index) => (
          <ImageListItem key={index} sx={{}}>
            <img onClick={removePicture} id={index} style={{borderRadius:"20px" }}src={item} alt="pic" />
          </ImageListItem>
        ))}
      </ImageList>
      <form style={{display:"flex", gap:"1rem", margin:"1rem auto"}} onSubmit={onsubmit}>
          <DefaultInput manager={manager} variant="outlined" color="secondary" text="Add Pictures" type="url" />
          <Button variant="contained" text="add" color="secondary" event={onsubmit}/>
     </form>
    </div>
  )
}
export default AddPictures


