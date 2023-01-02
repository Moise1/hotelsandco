/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    unsplashAccessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    unsplashSecretKey: process.env.NEXT_PUBLIC_UNSPLASH_SECRET_KEY
  }
}

module.exports = nextConfig
