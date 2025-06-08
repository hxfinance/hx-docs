# hx.finance Documentation

Official documentation for hx.finance - The community-owned DEX on Hyperliquid.

## 📚 Documentation

Visit the live documentation at: [docs.hx.finance](https://docs.hx.finance)

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server will start at `http://localhost:3000`.

### Building

```bash
npm run build
```

This generates a static site in the `out` directory.

## 🚀 Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### GitHub Pages Setup

1. Go to Settings → Pages in the repository
2. GitHub Actions should already be selected as the source
3. The site will be available at: `https://hxfinance.github.io/docs/`

### Manual Deployment

To deploy manually:

```bash
# Build the site
npm run build

# The output will be in the 'out' directory
# This can be served with any static file server
```

## 📝 Content Structure

- `/pages` - Documentation pages in MDX format
- `/pages/getting-started` - New user guides
- `/pages/trading` - Trading documentation
- `/pages/liquidity` - Liquidity provider guides
- `/pages/points-rewards` - Points system documentation
- `/pages/technical` - Technical documentation
- `/pages/token` - Token information
- `/pages/ecosystem` - Ecosystem overview
- `/pages/troubleshooting` - FAQ and troubleshooting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.