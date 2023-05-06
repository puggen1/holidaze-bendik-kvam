import {useState} from 'react'
import { StyledInput } from '../defaultInput/index.styles'
import { Slider } from '@mui/material'
import { RangeDiv } from './index.styles'
const RangeInput = ({start, end}) => {
    const [startState, setStartState] = useState(start)
    const [endState, setEndState] = useState(end)
    const update = (e, value) => {
        setStartState(value[0])
        setEndState(value[1])
    }
    const updateInput = (e) => {
        if(e.target.id === "start"){
            setStartState(e.target.value)
        } else {
            setEndState(e.target.value)
        }
    }
  return (
    <RangeDiv>
        <StyledInput id="start" onChange={updateInput} value={startState} variant="outlined" range="true"  label=""/>
        <Slider value={[startState, endState]} onChange={update} max={end} min={start}/>
        <StyledInput id="end" onChange={updateInput} value={endState} variant="outlined" range="true"  label=""/>

    </RangeDiv>
  )
}

export default RangeInput