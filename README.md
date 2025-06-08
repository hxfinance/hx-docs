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

The documentation is automatically deployed when changes are pushed to the main branch.

### Manual Deployment

To deploy manually using http-server:

```bash
# Build the site
npm run build

# Serve the static files
cd out
npx http-server -p 8080
```

### Server Setup

For production deployment on your server:

1. Clone this repository
2. The `out` folder contains the pre-built static site
3. Serve it with any static file server (nginx, apache, http-server, etc.)

Example with http-server:
```bash
cd /root/hx_docs
npx http-server -p 8080 -a 0.0.0.0 --cors
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