// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: Replace with the final custom domain when it exists.
// Currently the Vercel production URL so canonicals/sitemap are valid.
const SITE_URL = "https://ez-garage-doors.vercel.app";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      // PPC landing pages are campaign-only: noindex + out of the sitemap.
      filter: (page) => !page.includes("/ppc/"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
