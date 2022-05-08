/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
	},
	images: {
		domains: ["cdn.sanity.io"],
	},
	i18n: {
		locales: ["cs_CZ"],
		defaultLocale: "cs_CZ",
	},
};

module.exports = nextConfig;
