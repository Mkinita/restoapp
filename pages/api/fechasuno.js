import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaInicio = new Date('2022-11-01');
  const fechaFin = new Date('2022-11-30');
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


