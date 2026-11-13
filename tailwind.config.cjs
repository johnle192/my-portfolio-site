// Material Design 3 tokens live in src/css/tokens.css (values) and
// src/css/theme.{light,dark}.css (prefers-color-scheme switching).
// This config only points Tailwind at those CSS variables.

const typescaleRoles = [
  'display-large',
  'display-medium',
  'display-small',
  'headline-large',
  'headline-medium',
  'headline-small',
  'title-large',
  'title-medium',
  'title-small',
  'body-large',
  'body-medium',
  'body-small',
  'label-large',
  'label-medium',
  'label-small'
];

const typescale = (prop) =>
  Object.fromEntries(
    typescaleRoles.map((role) => [
      role,
      `var(--md-sys-typescale-${role}-${prop})`
    ])
  );

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // bg-primary, text-on-primary-container, border-outline-variant, ...
      colors: {
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        surface: 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        outline: 'var(--md-sys-color-outline)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        background: 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        secondary: 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        tertiary: 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        error: 'var(--md-sys-color-error)',
        'on-error': 'var(--md-sys-color-on-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'on-error-container': 'var(--md-sys-color-on-error-container)',
        shadow: 'var(--md-sys-color-shadow)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        scrim: 'var(--md-sys-color-scrim)'
      },
      // Typescale: pair `font-<role>` with `text-<role>`, e.g.
      // `font-headline-large text-headline-large`. `text-<role>` sets
      // font-size and font-weight (400 or 500 per MD3). Line height and
      // tracking are opt-in as `leading-<role>` / `tracking-<role>`.
      fontFamily: typescale('font-family-name'),
      fontSize: Object.fromEntries(
        typescaleRoles.map((role) => [
          role,
          [
            `var(--md-sys-typescale-${role}-font-size)`,
            { fontWeight: `var(--md-sys-typescale-${role}-font-weight)` }
          ]
        ])
      ),
      lineHeight: typescale('line-height'),
      letterSpacing: typescale('letter-spacing')
    }
  },
  plugins: []
};
