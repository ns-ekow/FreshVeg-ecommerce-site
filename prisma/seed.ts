import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  await Promise.all([
    prisma.category.upsert({
      where: { name: 'Root Vegetables' },
      update: {},
      create: { name: 'Root Vegetables' }
    }),
    prisma.category.upsert({
      where: { name: 'Leafy Vegetables' },
      update: {},
      create: { name: 'Leafy Vegetables' }
    }),
    prisma.category.upsert({
      where: { name: 'Fruit Vegetables' },
      update: {},
      create: { name: 'Fruit Vegetables' }
    }),
    prisma.category.upsert({
      where: { name: 'Stems' },
      update: {},
      create: { name: 'Stems' }
    })
  ])

  // Create products
  const products = [
    {
      name: 'Fresh Tomatoes',
      description: 'Juicy red tomatoes from Ghanaian farms',
      price: 12.99,
      category: 'Fruit Vegetables',
      stock: 50,
      image: '/FreshVegs/tomatoes.png'
    },
    {
      name: 'Cauliflower',
      description: 'Fresh white cauliflower heads',
      price: 8.50,
      category: 'Root Vegetables',
      stock: 30,
      image: '/FreshVegs/cauliflower.png'
    },
    {
      name: 'Red Onion',
      description: 'Sweet red onions',
      price: 6.99,
      category: 'Root Vegetables',
      stock: 40,
      image: '/FreshVegs/Red Onion 1.png'
    },
    {
      name: 'Long Okra',
      description: 'Tender okra pods',
      price: 9.99,
      category: 'Fruit Vegetables',
      stock: 35,
      image: '/FreshVegs/Long Okra 1.png'
    },
    {
      name: 'Kontomire (Cocoyam Leaves)',
      description: 'Fresh cocoyam leaves for traditional dishes',
      price: 7.50,
      category: 'Leafy Vegetables',
      stock: 25,
      image: '/FreshVegs/Cocoyam Leaves (Kontonmire) 1.png'
    },
    {
      name: 'Oyster Mushroom',
      description: 'Fresh oyster mushrooms',
      price: 15.99,
      category: 'Stems',
      stock: 20,
      image: '/FreshVegs/Oyster Mushroom 1.png'
    },
    {
      name: 'Aubergine',
      description: 'Purple eggplants',
      price: 11.99,
      category: 'Fruit Vegetables',
      stock: 28,
      image: '/FreshVegs/aubergine.png'
    },
    {
      name: 'Fresh Pepper',
      description: 'Hot chili peppers',
      price: 5.99,
      category: 'Fruit Vegetables',
      stock: 60,
      image: '/FreshVegs/pepper.png'
    }
  ]

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product
    })
  }

  // Create hardcoded users
  const hashedAdminPassword = await bcrypt.hash('admin123', 10)
  const hashedUserPassword = await bcrypt.hash('user123', 10)

  await prisma.user.upsert({
    where: { email: 'admin@freshveg.com' },
    update: {},
    create: {
      email: 'admin@freshveg.com',
      password: hashedAdminPassword,
      name: 'Admin User',
      role: 'admin'
    }
  })

  await prisma.user.upsert({
    where: { email: 'user@freshveg.com' },
    update: {},
    create: {
      email: 'user@freshveg.com',
      password: hashedUserPassword,
      name: 'Regular User',
      role: 'user'
    }
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })