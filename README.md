
# Vue Assets Generator

A command-line tool for Vue.js projects that generates JavaScript files for managing assets (like images and icons) in the `constants` directory. This tool scans specified folders, imports each image, and exports them as named exports for easy access throughout your project.

## Features

- Automatically generates asset import files
- Supports multiple asset folders (e.g., `images`, `icons`)
- Compatible with npm, Yarn, pnpm, and Bun

## Installation

Install globally using any of the following package managers:

### npm

```bash
npm install -g vue-3-assets-generator
```

### pnpm

```bash
pnpm add -g vue-3-assets-generator
```

### Yarn

```bash
yarn global add vue-3-assets-generator
```

### Bun

```bash
bun add -g vue-3-assets-generator
```

## Usage

After installation, you can use `vue-assets-gen` from any Vue project directory.

### Basic Usage

```bash
vue-assets-gen
```

This will scan the default folders `src/assets/images` and `src/assets/icons` and generate import/export files in `src/constants/`.
