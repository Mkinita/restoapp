import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "../helpers/index"






const FechaUno = ({orden}) => {
    const {id, nombre, pedido, total,  fecha} = orden

  return (

    <div className="">

        <div>
            {pedido.map(platillo => (
                <div key={platillo.id}

                className=""
                >
                </div>
            ))}
        </div>
    </div>
  )
}

export default FechaUno
