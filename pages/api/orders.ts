import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, {})

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    try {
      const orders = await prisma.order.findMany({
        where: {
          userId: (session.user as any)?.id
        },
        include: {
          items: {
            include: {
              product: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      })
      res.status(200).json(orders)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders' })
    }
  } else if (req.method === 'POST') {
    try {
      const { items, total } = req.body

      const order = await prisma.order.create({
        data: {
          userId: (session.user as any)?.id || '',
          total: parseFloat(total),
          items: {
            create: items.map((item: any) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price
            }))
          }
        },
        include: {
          items: {
            include: {
              product: true
            }
          }
        }
      })

      res.status(201).json(order)
    } catch (error) {
      res.status(500).json({ message: 'Error creating order' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}