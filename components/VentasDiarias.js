import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "../helpers/index"






const VentasDiarias = ({orden}) => {
    const {id, nombre, pedido, total,  fecha} = orden

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
                </div>
            ))}
        </div>
    </div>
  )
}

export default VentasDiarias




