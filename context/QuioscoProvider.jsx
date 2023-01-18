import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()


const QuioscoProvider = ({children}) => {
    const [categorias, setCategorias] = useState([])
    const [pedidos, setPedidos] = useState([])
    const [fechas, setFechas] = useState([])
    const [fechauno, setFechauno] = useState([])
    const [fechados, setFechados] = useState([])
    
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
    // const [currentDate, setCurrentDate] = useState(new Date())


    

    const router = useRouter()
    
    // const [paso, setPaso] = useState(1)

    const obtenerCategorias = async () => {
        const {data} = await axios('/api/categorias')
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    },[])



    const obtenerPedidos = async () => {
        const {data} = await axios('/api/admin')
        setPedidos(data)
    }
    useEffect(() => {
        obtenerPedidos()
    },[])



    const obtenerFechas = async () => {
        const {data} = await axios('/api/fechas')
        setFechas(data)
    }
    useEffect(() => {
        obtenerFechas()
    },[])


    const obtenerFechasUno = async () => {
        const {data} = await axios('/api/fechasuno')
        setFechauno(data)
    }
    useEffect(() => {
        obtenerFechasUno()
    },[])



    const obtenerFechasDos = async () => {
        const {data} = await axios('/api/fechasdos')
        setFechados(data)
    }
    useEffect(() => {
        obtenerFechasDos()
    },[])



    


     

    
    

    useEffect(() => {
        setCategoriaActual(categorias[0])
    },[categorias])


    useEffect(() => {
        setCategoriaActual(categorias[0])
    },[categorias])


    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad ) + total, 0)

        setTotal(nuevoTotal)
    }, [pedido])



    
    


   


    

    const handleClickCategoria = id =>{
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }


    const handlesetProducto = producto => {
        setProducto(producto)
    }


    const handleChangeModal = () => {
        setModal(!modal)
    }


    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
           setPedido(pedidoActualizado)

           toast.success('Guardado Correctamente')
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido')
        }

        setModal(false)
        
    }


    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }



    const handleElimanarProducto = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Pedido Eliminado')
    }



    const colocarOrden = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/ordenes',{pedido,nombre,total, fecha: new Date()})
            // Resetear la app
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success('Redirigiendo al Pago 🤑')

            setTimeout(() =>{
                router.push('https://sandbox.flow.cl/btn.php?token=ew6qutr')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }


        
    




    return(
        <QuioscoContext.Provider
        value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            producto,
            handlesetProducto,
            modal,
            handleChangeModal,
            pedido,
            handleAgregarPedido,
            // paso,
            handleEditarCantidades,
            handleElimanarProducto ,
            nombre,
            setNombre,
            colocarOrden,
            total,
            pedidos,
            fechas,
            fechauno,
            fechados
        }}
        
        
        >
            {children}
        </QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}


export default QuioscoContext