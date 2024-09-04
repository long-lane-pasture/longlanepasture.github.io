import type { Metadata, Viewport } from "next";
import { ClosureNotice } from "./components/ClosureNotice";
import { CustomScriptLoader } from "./components/CustomScriptLoader";
import { NavList, NavigationLink } from "./components/navigation";
import "./layout.css";

export const metadata: Metadata = {
	title: {
		template: "%s",
		default: "Long Lane Pasture",
	},
	description:
		"Long Lane Pasture is a community-run nature reserve in Finchley, North London.",
	keywords: [
		"Long Lane Pasture",
		"Finchley",
		"green space",
		"urban wildlife",
		"barnet",
		"meadow",
		"wildlife",
		"nature reserve",
		"north london",
		"volunteer",
		"community",
		"restoration",
	],
	icons: {
		shortcut: "/favicon.ico",
		apple: "/assets/apple-touch-icon.png",
	},
	generator: "https://github.com/long-lane-pasture/longlanepasture.github.io",
	openGraph: {
		title: "Long Lane Pasture",
		description: "Community-run nature reserve in Finchley, North London.",
		locale: "en_GB",
		type: "website",
		images: {
			url: "https://longlanepasture.org/assets/llpsquare.jpeg",
			alt: "View from the medow at Long Lane Pasture",
		},
	},
};
export const viewport: Viewport = {
	themeColor: "white",
	width: "device-width",
	initialScale: 1,
	userScalable: true,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactElement;
}) {
	const dd = (num: number): string => (num < 10 ? `0${num}` : num.toString());
	return (
		<html lang="en-GB">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
				<meta name="geo.region" content="GB" />
				<meta name="geo.placename" content="London Borough of Barnet" />
				<meta
					name="content_updated"
					content={((d = new Date()) =>
						[d.getFullYear(), dd(d.getMonth() + 1), dd(d.getDay())].join(
							"-",
						))()}
				/>
			</head>
			<body>
				<header>
					<h1>
						<NavigationLink to="home">Long Lane Pasture</NavigationLink>
					</h1>
					<nav>
						<a className="hamburger" href="#!">
							☰
						</a>
						<NavList filter="nav" />
					</nav>
				</header>
				<main>
					<ClosureNotice display={false} />
					{children}
					<footer>
						<NavList filter="footer" />
					</footer>
				</main>
				<CustomScriptLoader path="scripts" />
			</body>
		</html>
	);
}
