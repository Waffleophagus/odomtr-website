import type { FAQ } from "./types";

export const faq: FAQ[] = [
	{
		question: "Do you sell my data?",
		answer: "No. The only reason why we even have a back end is because of how we parse the data from your photos. Your data is yours and we do not sell it.",
	},
	{
		question: "How are you parsing the data from my photos? Is it AI?",
		answer: "Guilty as charged! We use Google Gemini to parse data from photos. They do not use any data for training or retain it per their privacy policy.",
	},
	{
		question: "Do you send any of my data to Google or other third parties?",
		answer: "We do not send any info about your account to Google for parsing, all photos are sent from our server not your phone. We have data analytics service to improve our service, and we use Posthog for that. We do not sell any information to anyone.",
	},
];
