export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-CO',{
        style: 'currency',
        currency:'USD',
        minimumFractionDigits: 0
    })
} 



export const formatiarFecha= fecha =>{
    const nuevaFecha = new Date(fecha)
    const opciones = {
        // weekday:'long',
        year:'numeric',
        month:'short',
        day:'numeric'
    }

    return new Date(nuevaFecha).toLocaleDateString('es-ES', opciones)
}