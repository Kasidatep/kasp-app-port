/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'seniorproject.sit.kmutt.ac.th',
        'www.sit.kmutt.ac.th',
        'via.placeholder.com',
        'www.kasidate.me',
        '*.kasidate.me',
        "cdn-icons-png.flaticon.com",
        "nestjs.com"
      ],
    },
    reactStrictMode: true,
  }
  
  module.exports = nextConfig