# React Demo Application

A modern React application built with TypeScript, Vite, and Ant Design, featuring a robust architecture with client and admin sections.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for optimal development experience
- **Component Library**: Utilizes Ant Design (antd) for beautiful and consistent UI components
- **Routing**: Implements React Router v7 for seamless navigation
- **Authentication**: Includes authentication system with protected routes
- **Layouts**: Multiple layout systems including:
  - Admin Layout
  - Client Layout
  - Empty Layout for authentication pages
- **Type Safety**: Full TypeScript support for better development experience
- **Code Quality**: ESLint configuration for maintaining code quality

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
react-demo/
├── src/
│   ├── components/      # Reusable components
│   │   ├── layouts/        # Layout components
│   │   │   ├── admin.tsx   # Admin layout
│   │   │   ├── client.tsx  # Client layout
│   │   │   └── empty.tsx   # Empty layout for auth pages
│   │   ├── pages/          # Page components
│   │   │   ├── about/
│   │   │   ├── home/
│   │   │   └── login/
│   │   ├── routes/         # Routing configuration
│   │   ├── hoc/            # Higher-order components
│   │   ├── assets/         # Static assets
│   │   └── App.tsx         # Root component
│   ├── public/             # Public assets
│   ├── .gitignore         # Git ignore configuration
│   ├── package.json       # Project dependencies and scripts
│   └── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## 🔐 Authentication

The application implements a secure authentication system using Higher-Order Components (HOC) for protecting routes. The `withAuth` HOC ensures that protected routes are only accessible to authenticated users.

## 🎨 UI/UX

- Built with Ant Design components for a consistent and professional look
- Responsive design that works across different screen sizes
- Clean and intuitive navigation structure

## 🌐 Domain Model

The application follows a clear separation of concerns with:

1. **Layouts**
   - Admin Layout: For administrative interfaces
   - Client Layout: For regular user interfaces
   - Empty Layout: For authentication pages

2. **Components**
   - Navbar: Navigation component
   - Other reusable UI components

3. **Pages**
   - Home: Main landing page
   - About: Information page
   - Login: Authentication page

4. **Routes**
   - Protected Routes: Require authentication
   - Public Routes: Accessible to all users

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
