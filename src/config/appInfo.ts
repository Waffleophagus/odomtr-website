import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Odomtr",
	description:
		"Odomtr is a better way to track your vehicle's maintence and fuel consumption. Track everything. Type nothing.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "generated-image.png",
	},
	storeLinks: {
		apple: "#",
		google: "#",
	} as StoreLinks,
};
