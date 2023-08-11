import './container-task.css'
import Button_secundary from '../form/button_secundary';
import Button_primary from '../form/button_primary';
import { useRouter } from 'next/navigation';

export function ContainerTask(props: {tasks? : any}){
   const router = useRouter()

   function Hola(){
    alert("hola")
   }
   const editTask = () => {
    router.push("/task/" + props.tasks.id)
   }
    
    return(
        <div className="container">
            <div id={"task" + props.tasks.id} className="target-task">
                <h3>{props.tasks.title}</h3>
                <h4>Description: {props.tasks.description}</h4>
                <Button_primary texto={'Editar'} callback={editTask}/> 
                <Button_secundary texto={'Eliminar'} callback={Hola}/> 
            </div>
        </div>
    )
}

