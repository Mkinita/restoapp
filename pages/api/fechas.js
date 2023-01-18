import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaInicio = new Date('2023-01-01');
  const fechaFin = new Date('2023-01-31');
  //Obtener Ordenes
  const ordenes = await prisma.orden.findMany ({
    where: {
        AND: [
          {
            fecha: {
              gt: fechaInicio
            }
          },
          {
            fecha: {
              lt: fechaFin
            }
          }
        ]
      }
  })

  res.status(200).json(ordenes);
}


