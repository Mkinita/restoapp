import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "../helpers/index"



const VentasDiarias = ({orden}) => {
    const {id, nombre, total, pedido, fecha} = orden


    

  
  return (
    <div className="border p-1 space-y-5">




            
            
          
    
        <div>
            {pedido.map(platillo => (
                <div key={platillo.id}

                
                className="py-1 flex border-b last-of-type:border-0 items-center"
                >

                    <table class="w-full text-xs text-left">
                                <thead class="text-xs uppercase">
                                    <tr>
                                    <th scope="col" className="w-1/3 p-1 text-center text-xs text-black">{platillo.nombre}</th>
                                    <th  scope="col" className="w-1/3 p-1 text-center text-xs text-black">{nombre}</th>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">{total}</th>
                                    </tr>
                                </thead>


                                
                    </table>

                    


                    



                    
                                
                    
                    {/* <div className="flex-auto w-96">
                        <h4 className="text-s font-bold text-black text-left">{platillo.nombre}</h4>
                        
                    </div>

                    <div class="flex-auto w-64 text-s">{nombre}</div>

                    

                    <div className="w-1/4 p-2 text-center text-xs text-gray-800 whitespace-nowrap">{total}</div> */}
                </div>
            ))}
        </div>



       
        

    </div>
  )
}

export default VentasDiarias




