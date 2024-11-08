import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Robot from "@/components/Robot";
import Head from "next/head";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<title>TECHREVOCON-24</title>
				<meta name="title" content="International Conference on Tech Revolution in India" />
				<meta name="description" content="Explore innovations at the International Conference on Tech Revolution in India with experts, researchers, and industry leaders." />
				<meta name="keywords" content="International Conference, Tech Revolution, India, SRMU" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="language" content="English" />
				<meta name="revisit-after" content="2 days" />
				<meta name="author" content="Shivam Saxena" />
			</Head>
			<body className={`antialiased min-h-screen `}>
				<Navbar />
				<Robot />
				{children}
				<Footer />
			</body>
		</html>
	);
}
