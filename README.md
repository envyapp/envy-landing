# Envy Landing

Public marketing site for Envy.

This app is intentionally separate from `Envy_Web`, which is the on-prem product application. The landing site can be deployed to a public marketing domain, while customer on-prem deployments should serve only the product app.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Notes

- The initial page was migrated from the previous `Envy_Web` landing route.
- Auth and dashboard routing dependencies were removed.
- CTA text and plan/card copy are expected to be updated as the on-prem marketing message is finalized.
