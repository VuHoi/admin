# System Design Package

A comprehensive design system package for the admin dashboard, providing reusable React components built with Material-UI and Tailwind CSS.

## Components

### Button
A customizable button component with support for different variants, sizes, shapes, and icons.

```tsx
import { Button } from '@bashbag/system-design';

<Button variant="contained" size="md" color="primary">
  Click me
</Button>
```

### Input
A flexible input component with support for labels, error states, and icons.

```tsx
import { Input } from '@bashbag/system-design';

<Input 
  label="Email"
  placeholder="Enter your email"
  onChange={(value) => console.log(value)}
/>

### Password
A password input component with show/hide functionality.

```tsx
import { Password } from '@bashbag/system-design';

<Password 
  name="password"
  label="Password"
  onChange={(value) => console.log(value)}
/>

### Text
A text component for consistent typography.

```tsx
import { Text } from '@bashbag/system-design';

<Text variant="h1">Heading</Text>

### Icons
A collection of custom icons.

```tsx
import { EyeIcon } from '@bashbag/system-design';

<EyeIcon />

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

This package is designed to be used within the admin dashboard workspace. Components are exported from the main entry point:

```tsx
import { Button, Input, Password, Text, EyeIcon } from '@bashbag/system-design';
```

**Note:** Form control components (InputFormControl, PasswordFormControl) are available for use with react-hook-form. Pass the form instance as a prop to these components.

## Testing

All components include comprehensive unit tests using Jest and React Testing Library. Run tests with:

```bash
yarn test
```

## Contributing

When adding new components:

1. Create the component in `src/components/`
2. Add comprehensive tests
3. Export from `src/index.ts`
4. Update this README with usage examples 