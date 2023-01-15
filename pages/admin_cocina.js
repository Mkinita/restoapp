import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import Orden from '../components/Orden'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes_listas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes_listas',fetcher,{refreshInterval: 100} )

    
     

    return(
        <AdminLayout pagina={'Cocina'}>

            <h1 className="text-4xl font-black"> Área Cocina</h1>
            <p className="text-2xl my-5"></p>

            {data && data.length ? data.map(orden =>
                
                <Orden
                    key={orden.id}
                    orden={orden}
                />

                ):<p>No Hay Ordenes Pendientes</p>}

        </AdminLayout>
    )
}