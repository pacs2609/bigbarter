// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  pages: true,
  router: {
    options: {
      linkExactActiveClass: "active",
    },
  },
  ssr: false,
  app: {
    baseURL: "/bartergang/"
  },
  css: [
    "~/assets/css/globals.css",
    "sweetalert2/dist/sweetalert2.min.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
    "~/assets/css/sidemenu.css",
    "~/assets/css/animate.css",
    "~/assets/css/shortcode/shortcodes.css",
  ],
  alias: {
    'images': fileURLToPath(new URL('/assets/images', import.meta.url)),
    'css': fileURLToPath(new URL('/assets/css', import.meta.url)),
    'js': fileURLToPath(new URL('/assets/js', import.meta.url)),
    'components': fileURLToPath(new URL('/components', import.meta.url)),
    'layouts': fileURLToPath(new URL('./layouts', import.meta.url)),
    'pages': fileURLToPath(new URL('./pages', import.meta.url)),
    'public': fileURLToPath(new URL('./public', import.meta.url)),
    'stores': fileURLToPath(new URL('./stores', import.meta.url)),
    'utils': fileURLToPath(new URL('./utils', import.meta.url)),
    'assets': fileURLToPath(new URL('./assets', import.meta.url)),
    'node_modules': fileURLToPath(new URL('./node_modules', import.meta.url)),
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: "~/assets/css/globals.css",
        configPath: "tailwind.config.js",
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
      },
      autoprefixer: {},
    },
  },
  nitro: {
    externals: {
      inline: ["tailwindcss"],
    }
  },
  vite: {
    build: {
      sourcemap: false,
    },
  },
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  runtimeConfig: {
    public: {
      // apiBase: process.env.API_BASE_URL
    },
    jwtSecret: process.env.JWT_SECRET,
  },
  app: {
    head: {
      title: "Bartergang",
      htmlAttrs: {
        lang: "th",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Bartergang" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/ico/favicon.ico" },
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap",
          rel: "stylesheet",
          integrity: "",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          rel: "stylesheet",
          integrity: "",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
          rel: "stylesheet",
          integrity: "",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous",
        },
        {
          src: "https://kit.fontawesome.com/81c823d859.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "nuxt-auth-utils",
    "nuxt-countdown",
    "vue3-carousel-nuxt",
  ],
});
