import useSWR from 'swr'
import axios from 'axios'
import VentasDiariaLayout from "../layout/VentasDiariaLayout"
import VentasDiarias from '../components/VentasDiarias'



export default function ventas_diarias() {

    const fetcher = () => axios('/api/admin').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/admin',fetcher,{refreshInterval: 100} )

    

    console.log(data)

    


    
     

    return(
        <VentasDiariaLayout pagina={'Admin'}>



            

            <h1 className="text-4xl font-black">Administrador</h1>
            <p className="text-2xl my-10">Fecha: 20/01/2023</p>


            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
                                <tr>
                                <th scope="col" className="w-1/7 p-2 text-center text-xs text-black">Pedido</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Nombre</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Total</th>
                                </tr>
                            </thead>
                            
            </table>
            

            {data && data.length ? data.map(orden =>

            
                
                <VentasDiarias
                    key={orden.id}
                    orden={orden}
                />

                ):<p className='text-center'>No Hay Ordenes Pendientes</p>}

 


                <table class="w-full text-xs text-left">
                        <thead class="text-xs uppercase">
                            <tr>
                                <th scope="col" className="w-1/3 p-1 text-center text-xs text-black"></th>
                                <th  scope="col" className="w-1/3 p-1 text-center text-xs text-black">Total</th>
                                <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">$10.000</th>
                            </tr>
                        </thead>
                </table>


        </VentasDiariaLayout>




        




    )


    
}