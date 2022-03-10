import { useState } from "react";
import {Button} from 'react-bootstrap'
export default function  AccordionControlButton(){
    const[buttonValue,setButtonValue]=useState<"Collapse"|"Expand">("Collapse");
    return(<>
<Button className=" tw-mr-10 tw-text-black" onClick={()=>{
        const value = buttonValue=="Expand"?"Collapse":"Expand";
        setButtonValue(value)
      }}>{buttonValue}</Button>
    </>)
}