import sanityClient from "@sanity/client";

const config = {
	projectId: process.env.PROJECT_ID,
	dataset: "production",
	apiVersion: "2021-08-04",
	useCdn: true,
};

export const client = sanityClient(config);
