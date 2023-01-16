import useSWR from 'swr'
import axios from 'axios'
import CocinaLayout from "../layout/CocinaLayout"
import Cocina from '../components/Cocina'



export default function admin_cocina() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes',fetcher,{refreshInterval: 100} )

    
     

    return(
        <CocinaLayout pagina={'Confirmar Pedido'}>

            <h1 className="text-4xl font-black text-center"></h1>
            <p className="text-2xl my-10"></p>

            {data && data.length ? data.map(orden =>
                
                <Cocina
                    key={orden.id}
                    orden={orden}
                />

                ):<a className=" bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold w-full"  href="/">Realizar Un pedido</a>}



                

                
        </CocinaLayout>










    )
}