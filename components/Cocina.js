import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"




const Cocina = ({orden}) => {
    const {id, nombre, total, pedido, fecha} = orden

    const completarOrden = async () => {

        try {

           await axios.post(`/api/ordenes/${id}`)
            toast.success('Su orden se esta preparando π')
            
        } catch (error) {
            toast.error('Hubo un error')
        }
    }


    
  return (
    <div className="border p-10 space-y-5">
            {/* <h3 className="text-2xl font-bold">Orden: {id}</h3> */}
            <p className="text-3xl font-bold text-center">Hola {nombre} β</p>
            <p className="text-2xl font-bold text-center">Tu Pago Fue Realizado Con Γxito</p>
            <p className="text-1xl font-bold text-center">Para Disfrutar De Tu Pedido Solo debes Confirma</p>
            <p className="text-6xl font-bold text-center">π</p>
          
    
        <div>
            {pedido.map(platillo => (
                <div key={platillo.id}
                className="py-3 flex border-b last-of-type:border-0 items-center"
                >
                    {/* <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            alt={`imagen platillo${platillo.nombre}`}
                            
                        />
                    </div>  */}
                    {/* <div className="p-5 space-y-2">
                        <h4 className="text-4xl font-bold text-amber-500">{platillo.nombre}</h4>
                        <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>
                        
                    </div> */}
                </div>
            ))}
        </div>

        
        <div className="md:flex md:items-center md:justify-between my-10">
                {/* <p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p> */}
                
                <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold"
                type="button"
                onClick={completarOrden}
                
                >
                Confirma Tu Pedido
                
                </button>
        </div>
    </div>
  )
}

export default Cocina