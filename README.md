# FreshVegs 🥕

A modern, production-ready e-commerce platform for fresh vegetables built with Next.js 14, TypeScript, and Tailwind CSS.

![FreshVegs](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan) ![Prisma](https://img.shields.io/badge/Prisma-5-green)

## 🌟 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Prisma
- **Authentication**: NextAuth.js with role-based access (User/Admin)
- **Database**: SQLite with Prisma ORM
- **State Management**: React Query + Context API
- **UI Components**: Custom design system with shadcn/ui patterns
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant with ARIA labels
- **Performance**: Optimized with lazy loading and caching
- **Error Handling**: Global error boundaries and loading states

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd freshveg
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

4. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your values:

   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔐 Authentication

### Test Accounts

- **Admin User**: `admin@freshveg.com` / `admin123`
- **Regular User**: `user@freshveg.com` / `user123`

## 📁 Project Structure

```
freshveg/
├── components/           # Reusable UI components
│   ├── ui/              # Design system components
│   ├── sections/        # Page sections
│   └── ErrorBoundary.tsx
├── contexts/            # React contexts
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Next.js pages and API routes
│   ├── api/            # API endpoints
│   └── _app.tsx        # App wrapper
├── prisma/              # Database schema and seed
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query + Context API
- **Forms**: React Hook Form
- **Icons**: React Icons

### Backend

- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js
- **API**: Next.js API Routes

### Development Tools

- **Linting**: ESLint
- **Formatting**: Prettier
- **Type Checking**: TypeScript
- **Package Manager**: npm

## 🎨 Design System

The application uses a custom design system built on top of Tailwind CSS with:

- **Color Palette**: Green-based theme for fresh produce
- **Typography**: Clean, readable fonts
- **Components**: Reusable UI components
- **Spacing**: Consistent spacing scale
- **Responsive**: Mobile-first design

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking

# Database
npx prisma studio    # Open Prisma Studio
npx prisma db push   # Push schema changes
npx tsx prisma/seed.ts # Seed database
```

## 🌐 API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/signout` - User logout

### Products

- `GET /api/products` - Get all products
- `POST /api/products` - Create product (Admin only)

### Orders

- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order

