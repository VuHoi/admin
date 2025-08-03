# Super Admin Dashboard

A comprehensive admin dashboard built with Next.js, Material-UI, and Tailwind CSS.

## Features

- **Modern UI**: Built with Material-UI and Tailwind CSS
- **TypeScript**: Full TypeScript support
- **Responsive Design**: Mobile-first responsive design
- **Component Library**: Uses @bashbag/system-design components
- **Authentication**: Login and registration pages
- **Dashboard**: Analytics and management interface
- **Storybook**: Component documentation and testing

## Tech Stack

- **Framework**: Next.js 15.3.2
- **UI Library**: Material-UI 7.1.0
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Testing**: Jest + React Testing Library
- **Documentation**: Storybook

## Getting Started

### Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
# or
npx nx serve super-admin

# Build for production
yarn build
# or
npx nx build super-admin
```

### Testing

```bash
# Run tests
yarn test
# or
npx nx test super-admin

# Run Storybook
yarn storybook
```

## Project Structure

```
packages/super-admin/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (DashboardLayout)/  # Dashboard layout
│   │   ├── authentication/     # Auth pages
│   │   └── utilities/         # Utility pages
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── package.json              # Dependencies
├── next.config.js            # Next.js config
├── tailwind.config.js        # Tailwind config
└── tsconfig.json            # TypeScript config
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn test` - Run tests
- `yarn lint` - Run ESLint
- `yarn storybook` - Start Storybook

## Dependencies

- **@bashbag/system-design**: Internal design system package
- **@mui/material**: Material-UI components
- **@emotion/react**: CSS-in-JS styling
- **react-hook-form**: Form handling
- **zod**: Schema validation

## Build Output

The application builds to `dist/super-admin/` directory.

## Development

This project is part of the BashBag monorepo and uses Nx for build orchestration. 