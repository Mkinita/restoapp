import useSWR from 'swr'
import axios from 'axios'
import VentasDiariaLayout from "../layout/VentasDiariaLayout"
import VentasDiarias from '../components/VentasDiarias'



export default function ventas_diarias() {

    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes',fetcher,{refreshInterval: 100} )

    
     

    return(
        <VentasDiariaLayout pagina={'Ventas-Diarias'}>

            <h1 className="text-4xl font-black">Ventas Diarias </h1>
            <p className="text-2xl my-10">Fecha: 13-01-2023</p>

            {data && data.length ? data.map(orden =>
                
                <VentasDiarias
                    key={orden.id}
                    orden={orden}
                />

                ):<p>No Hay Ordenes Pendientes</p>}

        </VentasDiariaLayout>
    )
}