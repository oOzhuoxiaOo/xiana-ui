# Xiana UI

A modern Vue 3 UI component library built with Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful and accessible components
- 🚀 **Vue 3** - Built with Vue 3 Composition API
- 🎯 **TypeScript** - Full TypeScript support
- 🎨 **Tailwind CSS** - Styled with Tailwind CSS
- 📦 **Tree Shaking** - Only import what you need
- 🎨 **Customizable** - Easy to customize with CSS variables

## Installation

```bash
npm install xiana-ui
```

## Usage

### Basic Usage

```vue
<template>
  <Button variant="default" size="default"> Click me </Button>
</template>

<script setup>
import { Button } from "xiana-ui";
import "xiana-ui/style";
</script>
```

### Tailwind CSS Setup

Make sure you have Tailwind CSS installed and configured in your project:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/xiana-ui/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Import Styles

Import the styles in your main entry file:

```javascript
import "xiana-ui/style";
```

## Components

### Button

```vue
<template>
  <div class="space-x-2">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
</template>

<script setup>
import { Button } from "xiana-ui";
</script>
```

## API Reference

### Button Props

| Prop      | Type                                                                          | Default     | Description                    |
| --------- | ----------------------------------------------------------------------------- | ----------- | ------------------------------ |
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | The visual style of the button |
| `size`    | `'default' \| 'sm' \| 'lg' \| 'icon'`                                         | `'default'` | The size of the button         |

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build library
pnpm build:lib

# Build documentation
pnpm docs:build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
