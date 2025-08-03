# Nx Configuration for Admin Dashboard

This project has been configured with Nx to provide better build tooling, caching, and project management.

## Available Commands

### Development
```bash
# Start development server
yarn dev
# or
npx nx serve admin

# Start development server on specific port
npx nx serve admin --port 3000
```

### Building
```bash
# Build for production
yarn build
# or
npx nx build admin

# Build for development
npx nx build admin --configuration=development
```

### Testing
```bash
# Run tests
yarn test
# or
npx nx test admin

# Run tests with coverage
npx nx test admin --configuration=ci
```

### Linting
```bash
# Lint the project
yarn lint
# or
npx nx lint admin
```

### Other Nx Commands
```bash
# Show all projects
npx nx show projects

# Show project graph
npx nx graph

# Run affected commands (only on changed files)
npx nx affected:build
npx nx affected:test
npx nx affected:lint

# Clear cache
npx nx reset
```

## Configuration Files

- `nx.json` - Main Nx workspace configuration
- `project.json` - Project-specific configuration
- `workspace.json` - Alternative project configuration
- `jest.config.ts` - Jest testing configuration
- `jest.preset.js` - Jest preset for Nx
- `tsconfig.base.json` - Base TypeScript configuration
- `.eslintrc.json` - ESLint configuration with Nx rules

## Benefits of Nx

1. **Intelligent Caching** - Nx caches build outputs and only rebuilds what's necessary
2. **Affected Commands** - Only run commands on files that have changed
3. **Project Graph** - Visualize dependencies between files and projects
4. **Consistent Tooling** - Standardized build, test, and lint commands
5. **Scalability** - Easy to add more projects and libraries as your app grows

## Next Steps

- Consider adding more projects (libraries, APIs, etc.) as your application grows
- Use `npx nx graph` to visualize your project dependencies
- Set up CI/CD with Nx affected commands for faster builds
- Add more Nx plugins as needed (React, Node.js, etc.) 