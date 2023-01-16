import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "../helpers/index"



const VentasDiarias = ({orden}) => {
    const {id, nombre, total, pedido, fecha} = orden

  
  return (
    <div className="flex border p-1 space-y-5">
            
            
          
    
        <div>
            {pedido.map(platillo => (
                <div key={platillo.id}
                className="py-3 flex border-b last-of-type:border-0 items-center"
                >
                    
                    <div className="flex-auto w-96">
                        <h4 className="text-s font-bold text-black text-left">{platillo.nombre}</h4>
                        
                    </div>

                    <div class="flex-auto w-64 text-s">{nombre}</div>

                    <div class="flex-auto w-36 text-right text-s">{total}</div>
                </div>
            ))}
        </div>

        

    </div>
  )
}

export default VentasDiarias