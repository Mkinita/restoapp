import useSWR from 'swr'
import axios from 'axios'
import CocinaLayout from "../layout/CocinaLayout"
import Cocina from '../components/Cocina'



export default function admin_cocina() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes',fetcher,{refreshInterval: 100} )

    
     

    return(
        <CocinaLayout pagina={'Pago'}>

            <h1 className="text-4xl font-black">Área Cocina </h1>
            <p className="text-2xl my-10">Preparar las Ordenes</p>

            {data && data.length ? data.map(orden =>
                
                <Cocina
                    key={orden.id}
                    orden={orden}
                />

                ):<p>No Hay Ordenes Pendientes</p>}

        </CocinaLayout>
    )
}