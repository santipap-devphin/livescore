const withImages = require("next-images");
const webpack = require("webpack");
require("dotenv").config();

module.exports = withImages({
  compress: true,
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    SITE_ENV: process.env.SITE_ENV,
    SITE_NAME: process.env.SITE_NAME,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
    // SEO
    META_TITLE: process.env.META_TITLE,
    META_DESCRIPTION: process.env.META_DESCRIPTION,
    META_IMG: process.env.META_IMG,
  },
  webpack(config, options) {
    return config;
  },
});