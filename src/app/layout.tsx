import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import type { Metadata } from "next";
import "@/app/global.css";

export const metadata: Metadata = {
	title: "MJ Studio Dev Environment",
	description: "Development Environment Settings for MJ Studio",
	openGraph: {
		images: "https://expo-release-it.mjstudio.net/social-image.png",
	},
	twitter: {
		images: "https://expo-release-it.mjstudio.net/social-image.png",
	},
};

const navbar = (
	<Navbar
		logo={<b>Dev Environment</b>}
		// ... Your additional navbar options
	/>
);
const footer = <Footer>{new Date().getFullYear()} © MJ Studio.</Footer>;

export default async function RootLayout({ children }) {
	return (
		<html
			// Not required, but good for SEO
			lang="en"
			// Required to be set
			dir="ltr"
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning
		>
			<Head>{}</Head>
			<body>
				<Layout
					navbar={navbar}
					pageMap={await getPageMap()}
					feedback={{ content: "Give me feedback" }}
					docsRepositoryBase="https://github.com/mym0404/devenv/tree/main"
					footer={footer}
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}
