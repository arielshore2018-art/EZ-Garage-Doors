// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: Replace with the final production domain before launch.
// Kept as an obvious placeholder on purpose — do not ship canonical/sitemap
// URLs pointing at this value.
const SITE_URL = "https://REPLACE-WITH-FINAL-DOMAIN.example";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
