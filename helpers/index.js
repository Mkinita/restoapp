export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-CO',{
        style: 'currency',
        currency:'USD',
        minimumFractionDigits: 0
    })
} 



