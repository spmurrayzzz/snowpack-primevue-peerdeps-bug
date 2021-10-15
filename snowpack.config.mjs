/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
  },
  plugins: [
    '@snowpack/plugin-vue'
  ],
  alias: {
    'vue': 'vue/dist/vue.esm-bundler'
  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    hmr: true
  },
  buildOptions: {
    out: 'dist'
  }
};
