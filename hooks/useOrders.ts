import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

interface OrderItem {
  id: string
  productId: string
  quantity: number
  price: number
  product: {
    id: string
    name: string
    image?: string
  }
}

interface Order {
  id: string
  userId: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  createdAt: string
  updatedAt: string
  items: OrderItem[]
}

// Fetch user orders
export function useOrders() {
  return useQuery({
    queryKey: ['orders'],
    queryFn: async (): Promise<Order[]> => {
      const response = await fetch('/api/orders')
      if (!response.ok) {
        throw new Error('Failed to fetch orders')
      }
      return response.json()
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

// Create new order
export function useCreateOrder() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (orderData: {
      items: Array<{ productId: string; quantity: number; price: number }>
      total: number
    }) => {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
    },
  })
}