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
		apple: "https://apps.apple.com/us/app/odomtr/id6745459689",
		google: "https://play.google.com/store/apps/details?id=com.d6software.carlog",
	} as StoreLinks,
};
