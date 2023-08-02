import Link from "next/link";
import { useEffect } from "react";

export default function containerTask(props: {Task? : any}){
    return(
        <div className="container">
            <div id={"task" + props.Task.id}>
                <h3>{props.Task.Title}</h3>
            </div>
        </div>
    )
}