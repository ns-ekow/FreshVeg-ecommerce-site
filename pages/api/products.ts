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
      const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' }
      })
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' })
    }
  } else if (req.method === 'POST') {
    if ((session.user as any)?.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden' })
    }

    try {
      const { name, description, price, category, stock, image } = req.body
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price: parseFloat(price),
          category,
          stock: parseInt(stock),
          image
        }
      })
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json({ message: 'Error creating product' })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}