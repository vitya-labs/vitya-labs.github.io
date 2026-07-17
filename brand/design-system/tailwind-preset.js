/**
 * Vitya Labs — Design System v1.0 · Tailwind preset
 * Usage:  // tailwind.config.js
 *   module.exports = { presets: [require('./vityalabs-preset')], ... }
 * Adds a `vl` namespace + brand/state/accent colors, fonts, radius, shadows,
 * gradients and motion. Namespaced so it won't clobber an app's own theme.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        vl: {
          bg: '#0c0e10',
          surface: '#111416',
          'surface-strong': '#171a1c',
          'surface-high': '#232629',
          text: '#eeeef0',
          muted: '#aaabad',
          dim: '#6c6d70',
          // brand signal
          primary: '#ff914d',
          'primary-deep': '#f38239',
          tertiary: '#ffd176',
          'on-primary': '#271200',
          // state
          success: '#3fbf6f',
          warning: '#f0a63c',
          danger: '#f0555c',
          info: '#56a7e8',
          // light-mode neutrals (use with dark: variants or a `.vl-light` scope)
          'l-bg': '#f7f4ef',
          'l-surface': '#ffffff',
          'l-surface-strong': '#f0ece4',
          'l-surface-high': '#e7e1d6',
          'l-text': '#17191b',
          'l-muted': '#6b6d70',
        },
        // per-project accents
        accent: {
          home: '#e8835f',
          grillhub: '#ff914d',
          toto: '#fd9000',
          energourmet: '#ffd176',
          shopper24: '#7ec8ff',
          vityaslife: '#ffb66b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'vl-sm': '18px',
        'vl-md': '24px',
        'vl-lg': '32px',
        'vl-pill': '999px',
      },
      boxShadow: {
        'vl-card': '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.08)',
        'vl-card-hover': '0 4px 12px rgba(0,0,0,0.1), 0 16px 40px rgba(0,0,0,0.12)',
        'vl-glow': '0 0 40px rgba(255,145,77,0.15)',
        'vl-glow-orange': '0 0 20px rgba(249,115,22,0.4)',
      },
      backgroundImage: {
        'vl-primary': 'linear-gradient(135deg, #ff914d, #f38239)',
        'vl-hero': 'linear-gradient(160deg, #1c0a00 0%, #3d1a00 30%, #7c2d12 60%, #b45309 100%)',
        'vl-card': 'linear-gradient(180deg, rgba(23,26,28,0.92), rgba(17,20,22,0.95))',
      },
      letterSpacing: {
        'vl-tight': '-0.04em',
        'vl-eyebrow': '0.2em',
      },
      keyframes: {
        'vl-rise-in': {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'vl-rise-in': 'vl-rise-in 700ms ease forwards',
      },
      transitionDuration: { vl: '180ms' },
    },
  },
};
