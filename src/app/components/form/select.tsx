import { useEffect, useState } from "react"
import { categoryTask } from "../enums/enum-backend"


export default function Selectcategory(props:{list?: string[] ,id: string, hint: string, handleinput: any[], value?: string}){
    const [selected, setSelected] = useState('');
    useEffect(() => { if (props.value != null) { setSelected(props?.value)}}, [])
    
    return(
        <select className="selectTask" id={props.id} value={selected} placeholder={props.hint} onChange={e => {
            setSelected(e.target.value);
            props.handleinput[0](e,  props.handleinput[1], props.handleinput[2]);
        }}>
            <option value="Work">Work</option>
            <option value="Sport">Sport</option>
            <option value="Work">Work</option>
            <option value="Work">Work</option>
        </select>
    )
}