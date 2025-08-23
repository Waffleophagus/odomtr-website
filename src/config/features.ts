import { FiBox, FiCamera } from "react-icons/fi";
import { FaGasPump } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import type { Feature } from "./types";

export const features: Feature[] = [
	{
		title: "Photo parsing",
		description: "Take photos instead of typing. We'll parse the data for you.",
		icon: FiCamera,
	},
	{
		title: "Track your fuel efficiency",
		description: "Using our photo parsing, keep track of your fuel efficiency in charts over time.",
		icon: FaGasPump,
	},
	{
		title: "Keep track of your car's maintenance",
		description: "All you need is a scan of your mechanic's report and we'll parse everything they did for you.",
		icon: FaWrench,
	},
];
