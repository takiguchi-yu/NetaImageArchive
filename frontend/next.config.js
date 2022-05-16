/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    prependData: `@import "variables.scss";`
  }
}

module.exports = nextConfig
