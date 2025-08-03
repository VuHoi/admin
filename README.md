# BashBag Admin Monorepo

A modern monorepo built with Yarn 2 workspaces and Nx for managing multiple applications and packages.

## 🏗️ Project Structure

```
admin/
├── packages/
│   ├── super-admin/          # Next.js admin dashboard
│   └── system-design/        # Shared component library
├── .yarn/                    # Yarn 2 files
├── .nx/                      # Nx cache
├── dist/                     # Build outputs
└── node_modules/             # Dependencies
```

## 📦 Packages

### **@bashbag/super-admin**
- **Type**: Next.js Application
- **Description**: Admin dashboard with Material-UI and Tailwind CSS
- **Location**: `packages/super-admin/`
- **Tech Stack**: Next.js 15, Material-UI 7, TypeScript, Tailwind CSS

### **@bashbag/system-design**
- **Type**: React Component Library
- **Description**: Shared UI components and design system
- **Location**: `packages/system-design/`
- **Tech Stack**: React, Material-UI, TypeScript, Jest

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Yarn 2 (Berry)

### Installation
```bash
# Install dependencies
yarn install

# Start development server
yarn dev
# or
npx nx serve super-admin

# Build all packages
yarn build
# or
npx nx build super-admin
```

## 🛠️ Available Commands

### Development
```bash
# Start super-admin development server
yarn dev
npx nx serve super-admin

# Start system-design development
cd packages/system-design && yarn dev
```

### Building
```bash
# Build super-admin
yarn build
npx nx build super-admin

# Build system-design
npx nx build @bashbag/system-design
```

### Testing
```bash
# Test super-admin
yarn test
npx nx test super-admin

# Test system-design
npx nx test @bashbag/system-design

# Test all packages
npx nx run-many --target=test --all
```

### Linting
```bash
# Lint super-admin
yarn lint
npx nx lint super-admin

# Lint all packages
npx nx run-many --target=lint --all
```

## 📋 Project Management

### List Projects
```bash
npx nx show projects
```

### Run Multiple Targets
```bash
# Build all projects
npx nx run-many --target=build --all

# Test all projects
npx nx run-many --target=test --all
```

## 🏛️ Architecture

- **Yarn 2 Workspaces**: Package management and linking
- **Nx**: Build orchestration and caching
- **TypeScript**: Type safety across all packages
- **Jest**: Testing framework
- **ESLint**: Code linting
- **Storybook**: Component documentation

## 📁 Key Files

- `package.json`: Root dependencies and scripts
- `workspace.json`: Nx project definitions
- `nx.json`: Nx workspace configuration
- `.yarnrc.yml`: Yarn 2 configuration
- `tailwind.config.js`: Global Tailwind configuration

## 🔧 Development

This monorepo uses:
- **Yarn 2 (Berry)** for package management
- **Nx** for build orchestration and caching
- **TypeScript** for type safety
- **Jest** for testing
- **ESLint** for code quality

## 📚 Documentation

- [Super Admin README](packages/super-admin/README.md)
- [System Design README](packages/system-design/README.md)
- [Nx Documentation](https://nx.dev/)
- [Yarn 2 Documentation](https://yarnpkg.com/)
