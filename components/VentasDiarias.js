import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "../helpers/index"



const VentasDiarias = ({orden}) => {
    const {id, nombre, total, pedido, fecha} = orden 

   
  return (
    <div className="border p-10 space-y-5">   
    
        <p>{total}</p>
       
    
        
    </div>
  )
}

export default VentasDiarias