// @ts-check
import vercel from "@astrojs/vercel"
import { defineConfig, envField } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://www.dresan.dev",
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-CO",
          en: "en-US",
        },
      },
    }),
  ],
  redirects: {
    "/": {
      status: 301,
      destination: "/es/",
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  env: {
    schema: {
      HOST_URL: envField.string({ context: "client", access: "public" }),
      FORM_ID: envField.string({ context: "client", access: "public" }),
    },
  },
})
