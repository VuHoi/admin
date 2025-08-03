# Vendor Package

A library package for managing vendor integrations and third-party services in the admin dashboard.

## Purpose

This package is designed to handle:
- Third-party API integrations
- Vendor management utilities
- External service connectors
- Payment gateway integrations
- Analytics and tracking services

## Development

### Install dependencies
```bash
yarn install
```

### Run tests
```bash
yarn test
```

### Build package
```bash
yarn build
```

### Development mode
```bash
yarn dev
```

## Usage

This package is designed to be used within the admin dashboard workspace. Components and utilities are exported from the main entry point:

```tsx
import { VendorService, PaymentGateway } from '@bashbag/vendor';
```

## Structure

```
src/
├── components/     # React components for vendor integrations
├── utils/         # Utility functions for vendor management
├── types/         # TypeScript type definitions
└── index.ts       # Main entry point
```

## Testing

All components and utilities include comprehensive unit tests using Jest and React Testing Library. Run tests with:

```bash
yarn test
```

## Contributing

When adding new vendor integrations:

1. Create the integration in the appropriate directory (`components/`, `utils/`, or `types/`)
2. Add comprehensive tests
3. Export from the main `index.ts` file
4. Update this README with usage examples 