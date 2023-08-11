import { httpGet } from "@/app/core/http-contract-request"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CreateTask from "./CreateTask"


export default function EditTask(){
    const [task, setTask] = useState({id: 0, title: "", date: "", category: "", priority: "", description: ""})
    const [render, renderTask] = useState( <CreateTask/>)
    const router = useRouter()

    useEffect(() =>{
        if(router.asPath !== router.route){
            httpGet("tasks/" + router.query.id).then((response) =>{
                setTask(response)
                console.log(response);
                renderTask(<CreateTask task={task}/>)
            }).catch((error) => console.error(error))
        }
    }, [router.isReady])

    return(
        <div>{task.id != 0 ? (<CreateTask task={task}/>) : (<div></div>)}</div>
    )
}