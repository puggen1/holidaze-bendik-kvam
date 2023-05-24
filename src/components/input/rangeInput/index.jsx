import { StyledInput } from '../defaultInput/index.styles'
import { Slider } from '@mui/material'
import { RangeDiv } from './index.styles'
const RangeInput = ({start, end, setRange, range}) => {
  
    const update = (e, value) => {
        setRange([value[0], value[1]])
        
    }
    const updateInput = (e) => {
        if(e.target.id === "start"){
            setRange((prev) => [e.target.value, prev[1]])
        } else {
            setRange((prev) => [prev[0], e.target.value])
        }
    }
  return (
    <RangeDiv>
        <StyledInput id="start" onChange={updateInput} value={range[0]} variant="outlined" range="true"  label=""/>
        <Slider value={[range[0], range[1]]} onChange={update} max={end} min={start}/>
        <StyledInput id="end" onChange={updateInput} value={range[1]} variant="outlined" range="true"  label=""/>

    </RangeDiv>
  )
}

export default RangeInput