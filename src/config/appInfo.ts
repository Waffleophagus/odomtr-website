import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Your App Name",
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "favicon.webp",
	},
	storeLinks: {
		apple: "#",
		google: "#",
	} as StoreLinks,
};
