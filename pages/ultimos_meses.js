import useSWR from 'swr'
import axios from 'axios'
import EneroLayout from "../layout/EneroLayout"
import FechaUno from '../components/FechaUno'
import Grafico  from '../components/Grafico'
import useQuiosco from "../hooks/useQuiosco"



export default function ultimos_meses() {

    const fetcher = () => axios('/api/fechas').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/fechas',fetcher,{refreshInterval: 100} )
    const {fechas,fechauno,fechados} =useQuiosco();

    
    let sum1 = 0;

    for (let i = 0; i < fechas.length; i++) {
        sum1 += fechas[i].total;
    }


    let sum2 = 0;

    for (let i = 0; i < fechauno.length; i++) {
        sum2 += fechauno[i].total;
    }



    let sum3 = 0;

    for (let i = 0; i < fechados.length; i++) {
        sum3 += fechados[i].total;
    }



    const sumaTotal = sum1 + sum2 + sum3


    



    
    

    return(


        
        <EneroLayout pagina={'Confirmar Pedido'}>



            <h1 className="text-4xl font-black">Ventas Ultimos Meses</h1>
            <p className="text-2xl my-10"></p>
            
            



            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-amber-400 dark:text-gray-400">
                                <tr>
                                <th scope="col" className="w-1/7 p-2 text-center text-xs text-black">Mes</th>
                                <th  scope="col" className="w-1/7 p-2 text-center text-xs text-black">Total Ventas</th>
                                </tr>
                            </thead>

                            <thead class="text-xs uppercase">
                                <tr>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">Noviembre</th>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">{sum2}</th>
                                </tr>
                                <tr>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">Diciembre</th>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">{sum3}</th>
                                </tr>
                                <tr>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">Enero</th>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">{sum1}</th>
                                </tr>


                                <tr>
                                    <th  scope="col" className="w-1/3 p-1 text-center text-xs text-black">Total</th>
                                    <th  scope="col" className="w-1/4 p-1 text-center text-xs text-black">{sumaTotal}</th>
                                </tr>
                            </thead>
                            
                            
            </table>


            <Grafico/>



            
            {data && data.length ? data.map(orden =>
                
                <FechaUno
                    key={orden.id}
                    orden={orden}
                />

                ):<p className="">Sin Ventas</p>}



                

                
        </EneroLayout>










    )
}