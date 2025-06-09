import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>hx.finance</span>,
  project: {
    link: 'https://github.com/hxfinance',
  },
  chat: {
    link: 'https://discord.gg/hxfinance',
  },
  docsRepositoryBase: 'https://github.com/hxfinance/docs/blob/main',
  footer: {
    text: '© 2025 hx.finance - Community Owned DEX on Hyperliquid',
  },
  primaryHue: 260, // Purple theme
  useNextSeoProps() {
    return {
      titleTemplate: '%s – hx.finance Docs'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="hx.finance Documentation" />
      <meta property="og:description" content="Learn how to trade, provide liquidity, and earn on hx.finance - the community-owned DEX on Hyperliquid" />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
}

export default config