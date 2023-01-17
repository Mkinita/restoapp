import { useState, useEffect } from 'react';

function FechaActual() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>Fecha: {currentDate.toISOString().slice(0, 20)}</p>;
}

export default FechaActual;





